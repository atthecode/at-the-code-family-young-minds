# AT THE CODE Family Support Worker

Production Worker: `at-the-code-family-support`  
Custom domain: `family.at-the-code.com`

## Cloudflare Workers Builds

Connect the EXISTING Worker to GitHub using:

- Repository: `atthecode/at-the-code-family-young-minds`
- Production branch: `feature/family-support-fund-v0-1`
- Root directory / Path: `family-support-worker`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Preview command: `npx wrangler preview`

The build reconstructs the small website family-story video from the checked-in source chunks, then Wrangler deploys the static assets.

The Wrangler configuration deliberately uses the existing Worker name:
`at-the-code-family-support`

After this one-time Git connection, every push to the production branch automatically builds and deploys the Worker.
