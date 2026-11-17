# Security Policy

## Supported Versions

Security fixes apply to the latest deployed commit on `main`. This personal
portfolio does not maintain separate release branches or older supported versions.

## Temporary development dependency exception

`npm run audit:security` always blocks production vulnerabilities, unknown
advisories, registry errors and incomplete audit results. The full, unfiltered
report is available through `npm run audit:full`.

One known advisory is temporarily accepted until **2026-12-17 UTC**:
[GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf),
affecting development-only `picomatch@4.0.7` through Vite/Vitest and their
`fdir`/`tinyglobby` dependencies. No official patched version was available when
reviewed on 2026-11-17. This is risk acceptance, **not a vulnerability fix**.

This portfolio is deployed as static files. Visitors cannot supply glob patterns
to its development tools. The exception is restricted to the exact advisory,
version and development dependency chain in `security/audit-policy.json`.
Production use, additional advisories, critical severity, changed picomatch
versions or expiry fail the check. Tests verify these rejection paths.

Remove the exception and update the lockfile as soon as an official fix is
available. Review the full audit during dependency updates; do not use repeated
`npm audit fix --force` runs to chase version downgrades.

## Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

1. **Do not open a public issue.**
   Security issues should be kept private until a fix is released.

2. **Contact us directly:**
   Send an email to ameer.tech28@gmail.com (or use [GitHub Security Advisories](https://docs.github.com/en/code-security/security-advisories)) with details.

3. **Include:**
   - A clear description of the vulnerability  
   - Steps to reproduce the issue  
   - Potential impact  

4. **Response time:**
   - Reports are reviewed as soon as possible; this personal project has no guaranteed response SLA.
   - A fix will be prepared, tested, and released according to the issue's severity.

5. **Disclosure:**
   - Once the issue is resolved, we will publicly disclose the vulnerability and credit the reporter (unless you prefer to stay anonymous).  
