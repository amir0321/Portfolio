import { describe, expect, it } from 'vitest';
import { evaluateAudit } from '../../scripts/security-audit.mjs';
import policy from '../../security/audit-policy.json';

const reviewDate = new Date('2026-11-17T00:00:00Z');

function fixture() {
  return {
    report: {
      auditReportVersion: 2,
      metadata: { vulnerabilities: { total: 2 } },
      vulnerabilities: {
        picomatch: {
          name: 'picomatch', severity: 'high', nodes: ['node_modules/picomatch'],
          via: [{ name: 'picomatch', url: policy.advisory, severity: 'high' }],
        },
        vite: { name: 'vite', severity: 'high', nodes: ['node_modules/vite'], via: ['picomatch'] },
      },
    },
    lock: { packages: {
      'node_modules/picomatch': { version: '4.0.7', dev: true },
      'node_modules/vite': { version: '7.3.8', dev: true },
    } },
  };
}

describe('security audit policy', () => {
  it('accepts only the reviewed advisory and its development dependency chain', () => {
    const { report, lock } = fixture();
    expect(evaluateAudit(report, lock, policy, reviewDate)).toEqual({ accepted: ['picomatch', 'vite'], blocked: [] });
  });

  it('blocks the known advisory if its dependency enters production', () => {
    const { report, lock } = fixture();
    delete lock.packages['node_modules/picomatch'].dev;
    expect(evaluateAudit(report, lock, policy, reviewDate).blocked).toEqual(['picomatch', 'vite']);
  });

  it('blocks a production parent even if the leaf is marked development-only', () => {
    const { report, lock } = fixture();
    lock.packages['node_modules/vite'].dev = false;
    expect(evaluateAudit(report, lock, policy, reviewDate).blocked).toEqual(['vite']);
  });

  it('blocks a newly reported advisory in the same package', () => {
    const { report, lock } = fixture();
    report.vulnerabilities.picomatch.via.push({ name: 'picomatch', url: 'https://github.com/advisories/GHSA-new-advisory', severity: 'high' });
    expect(evaluateAudit(report, lock, policy, reviewDate).blocked).toEqual(['picomatch', 'vite']);
  });

  it('blocks unrelated findings while retaining visibility of accepted findings', () => {
    const { report, lock } = fixture();
    report.metadata.vulnerabilities.total++;
    report.vulnerabilities.other = { name: 'other', severity: 'low', nodes: ['node_modules/other'], via: [{ name: 'other', url: 'another-advisory' }] };
    lock.packages['node_modules/other'] = { version: '1.0.0', dev: true };
    expect(evaluateAudit(report, lock, policy, reviewDate)).toEqual({ accepted: ['picomatch', 'vite'], blocked: ['other'] });
  });

  it('blocks severity escalation to critical', () => {
    const { report, lock } = fixture();
    report.vulnerabilities.picomatch.via[0].severity = 'critical';
    expect(evaluateAudit(report, lock, policy, reviewDate).blocked).toEqual(['picomatch', 'vite']);
  });

  it('blocks changed package versions and missing lockfile entries', () => {
    const { report, lock } = fixture();
    lock.packages['node_modules/picomatch'].version = '4.0.8';
    expect(evaluateAudit(report, lock, policy, reviewDate).blocked).toEqual(['picomatch', 'vite']);
    delete lock.packages['node_modules/picomatch'];
    expect(evaluateAudit(report, lock, policy, reviewDate).blocked).toEqual(['picomatch', 'vite']);
  });

  it('blocks at expiry and when the expiry is invalid', () => {
    const { report, lock } = fixture();
    expect(evaluateAudit(report, lock, policy, new Date(policy.expires)).blocked).toEqual(['picomatch', 'vite']);
    expect(evaluateAudit(report, lock, { ...policy, expires: 'invalid' }, reviewDate).blocked).toEqual(['picomatch', 'vite']);
  });

  it('rejects registry errors, malformed reports and inconsistent totals', () => {
    const { report, lock } = fixture();
    expect(() => evaluateAudit({ error: 'network unavailable' }, lock, policy, reviewDate)).toThrow();
    expect(() => evaluateAudit({ ...report, metadata: {} }, lock, policy, reviewDate)).toThrow();
    expect(() => evaluateAudit({ ...report, error: 'registry failure' }, lock, policy, reviewDate)).toThrow();
    expect(() => evaluateAudit({ ...report, vulnerabilities: 1, metadata: { vulnerabilities: { total: 0 } } }, lock, policy, reviewDate)).toThrow();
  });

  it('blocks unresolvable or cyclic dependency references', () => {
    const { report, lock } = fixture();
    report.vulnerabilities.picomatch.via = ['vite'];
    expect(evaluateAudit(report, lock, policy, reviewDate).blocked).toEqual(['picomatch', 'vite']);
    report.vulnerabilities.picomatch.via = ['missing'];
    expect(evaluateAudit(report, lock, policy, reviewDate).blocked).toEqual(['picomatch', 'vite']);
  });

  it('passes without an exception when the advisory is no longer reported', () => {
    const { lock } = fixture();
    const report = { auditReportVersion: 2, vulnerabilities: {}, metadata: { vulnerabilities: { total: 0 } } };
    expect(evaluateAudit(report, lock, policy, new Date('2027-01-01'))).toEqual({ accepted: [], blocked: [] });
  });
});
