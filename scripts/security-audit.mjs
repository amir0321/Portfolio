import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Only the explicitly reviewed development dependency chain may use this policy.
// npm's complete report remains available through `npm run audit:full`.
export function evaluateAudit(report, lockfile, policy, now = new Date()) {
  if (
    report?.auditReportVersion !== 2 || report.error ||
    !report.vulnerabilities || typeof report.vulnerabilities !== 'object' || Array.isArray(report.vulnerabilities) ||
    !lockfile?.packages || typeof lockfile.packages !== 'object' || Array.isArray(lockfile.packages) ||
    report.metadata?.vulnerabilities?.total !== Object.keys(report.vulnerabilities).length
  ) {
    throw new Error('Invalid or incomplete npm audit report/lockfile; refusing to accept it.');
  }

  const entries = report.vulnerabilities;
  const validPolicy =
    policy?.advisory === 'https://github.com/advisories/GHSA-fc5q-39xc-vjpf' &&
    policy.package === 'picomatch' && policy.version === '4.0.7' &&
    Array.isArray(policy.affectedPackages) &&
    Number.isFinite(Date.parse(policy.expires)) &&
    now.getTime() < Date.parse(policy.expires);

  function covered(name, visiting = new Set()) {
    if (!validPolicy || visiting.has(name)) return false;
    const item = entries[name];
    if (
      !policy.affectedPackages.includes(name) || !item || item.name !== name ||
      item.severity !== 'high' || !Array.isArray(item.nodes) || !item.nodes.length ||
      !item.nodes.every((node) => lockfile.packages[node]?.dev === true) ||
      !Array.isArray(item.via) || !item.via.length
    ) return false;

    const ancestors = new Set(visiting).add(name);
    return item.via.every((cause) => {
      if (typeof cause === 'string') return covered(cause, ancestors);
      return name === policy.package &&
        cause?.name === policy.package && cause.url === policy.advisory &&
        cause.severity === 'high' &&
        item.nodes.every((node) => lockfile.packages[node].version === policy.version);
    });
  }

  const accepted = [];
  const blocked = [];
  for (const name of Object.keys(entries)) {
    (covered(name) ? accepted : blocked).push(name);
  }
  return { accepted, blocked };
}

function runAudit() {
  const root = new URL('../', import.meta.url);
  const lockfile = JSON.parse(readFileSync(new URL('package-lock.json', root), 'utf8'));
  const policy = JSON.parse(readFileSync(new URL('security/audit-policy.json', root), 'utf8'));
  const command = process.env.npm_execpath ? process.execPath : 'npm';
  const args = process.env.npm_execpath
    ? [process.env.npm_execpath, 'audit', '--json']
    : ['audit', '--json'];
  const audit = spawnSync(command, args, {
    cwd: fileURLToPath(root),
    encoding: 'utf8',
    timeout: 60000,
    maxBuffer: 4 * 1024 * 1024,
  });
  if (audit.error || audit.signal || ![0, 1].includes(audit.status)) {
    throw new Error('npm audit could not complete. Check network access and retry.');
  }

  const report = JSON.parse(audit.stdout);
  const { accepted, blocked } = evaluateAudit(report, lockfile, policy);
  if (audit.status !== 0 && report.metadata.vulnerabilities.total === 0) {
    throw new Error('npm audit failed without a valid vulnerability result.');
  }
  if (accepted.length) {
    console.warn(`TEMPORARY ACCEPTANCE, NOT A FIX: ${policy.advisory}`);
    console.warn(`Development entries: ${accepted.join(', ')}. Expires: ${policy.expires}`);
    console.warn(policy.reason);
  }
  if (blocked.length) {
    console.error('Security audit blocked:', blocked.join(', '));
    for (const name of blocked) console.error(JSON.stringify(report.vulnerabilities[name], null, 2));
    process.exitCode = 1;
    return;
  }
  console.log(accepted.length
    ? 'Security policy passed with the documented development-only exception. The full audit still reports that advisory.'
    : 'Security audit passed with no known vulnerabilities.');
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try {
    runAudit();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
