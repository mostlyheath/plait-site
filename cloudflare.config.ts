import { bindings, defineConfig } from 'cf/config';
import * as entrypoint from '@astrojs/cloudflare/entrypoints/server' with { type: 'cf-worker' };

export default defineConfig({
	worker: {
		name: "plait-site",
		compatibilityDate: "2026-11-23",
		compatibilityFlags: ['global_fetch_strictly_public'],
		entrypoint,
		env: {
			ASSETS: bindings.assets(),
		},
		observability: {
			enabled: true,
		},
		// The site is served only at its own domain; Cloudflare manages the DNS
		// record and certificate for a Workers custom domain.
		domains: ['plait.mostlyheath.com'],
		workersDev: false,
	},
});
