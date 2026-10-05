# AT THE CODE Family Support Worker

Production Worker: `at-the-code-family-support`
Custom domain: `family.at-the-code.com`

## Cloudflare Workers Builds

Connect the EXISTING Worker to GitHub using:

- Repository: `atthecode/at-the-code-family-young-minds`
- Production branch: `feature/family-support-fund-v0-1`
- Root directory / Path: `family-support-worker`
- Build command: leave blank
- Deploy command: `npx wrangler deploy`
- Preview command: `npx wrangler preview`

The Wrangler configuration in this folder deliberately uses the existing Worker name:
`at-the-code-family-support`

After this one-time Git connection, pushes to the production branch automatically deploy the Worker.
