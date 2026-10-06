# Family Young Minds — repair agent

## Mission
Repair and stabilise the current Family Young Minds / family-support build.

## Priority checks
1. Identify the current public journey and recent family-support media additions.
2. Verify videos/images resolve correctly and are not low-quality accidental derivatives.
3. Repair navigation, mobile layout, contact/CTA paths and deployment config.
4. Preserve privacy around family information and uploaded media.
5. Do not publish new claims about outcomes that are not supported.

## Release evidence
Return an asset/playback checklist, route smoke test, build result and deployment blockers.

## Operating rules
- Work only inside this branch and this app's scope.
- Do not merge to main, deploy to production, enable payments, or rotate/create secrets without explicit owner approval.
- Never commit API keys, tokens, passwords, customer data, or private case information.
- Preserve existing branding and working features; repair before redesign.
- First reproduce/audit the problem, then make the smallest safe fix.
- Run available tests/build/lint checks and add or update tests for bugs you fix where practical.
- Keep an audit trail in commits. If something cannot be verified, record it clearly instead of guessing.
- Treat privacy, safeguarding, account isolation, payment handling, and access controls as release blockers.
- A task is not complete merely because code compiles: verify the user journey and navigation paths.
