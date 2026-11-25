# plait-site

The marketing site for [Plait](https://github.com/mostlyheath/plait), a native
Mac app for working with coding agents. It is live at
<https://plait.mostlyheath.com>.

The site is a single static page built with [Astro](https://astro.build) and
served from Cloudflare Workers static assets. Its copy follows Plait's own
[README](https://github.com/mostlyheath/plait/blob/main/README.md) and docs:
it describes shipped behaviour only, and marks planned work as planned.
Screenshots are the app's real views, rendered from its scene tests over a
sample project.

## Develop

Requires Node.js 22.18 or later.

```sh
npm ci
npm run dev      # http://localhost:4321
npm run build    # static output in .cloudflare/output/v1/workers/default/assets
```

## Deploy

Deploys use the Cloudflare [`cf` CLI](https://developers.cloudflare.com/cf/),
configured in `cloudflare.config.ts`, which also attaches the
`plait.mostlyheath.com` custom domain.

```sh
cf auth login    # once
npm run deploy   # cf deploy: builds, uploads, and applies the domain
```

Deploys run by hand for now. Automatic deploys from `main` (a GitHub Action
with a scoped `CLOUDFLARE_API_TOKEN` secret) are a follow-up.

## Updating screenshots

Screenshots live in `src/assets/screens/`. They come from Plait's scene
renders (`bash scripts/snapshots.sh <dir>` in the Plait repository), which
draw the real views over injected sample state. Astro converts them to AVIF
and WebP at build time. When you replace one, keep its file name and check
that no visible text reads as test data.

## Licence

MIT, as Plait. The Plait artwork is from Plait's
[`assets/branding`](https://github.com/mostlyheath/plait/tree/main/assets/branding).
IBM Plex Sans and Plex Mono are bundled through Fontsource under the SIL Open
Font License.
