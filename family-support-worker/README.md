# AT THE CODE Family Support Worker

Production Worker: `at-the-code-family-support`
Custom domain: `family.at-the-code.com`

Cloudflare Workers Builds should use:
- Root directory / Path: `family-support-worker`
- Production branch: `feature/family-support-fund-v0-1`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

After the one-time Git connection, pushes to the production branch deploy automatically.
