# Ben Msumba portfolio

The portfolio is served at [benmsumba.me](https://benmsumba.me/) through Vercel.

- `npm ci` installs the locked dependencies.
- `npm run dev` starts Vite for local development.
- `npm run build` writes the prerendered production site to `dist/client`.
- `npm run preview` previews the production build locally. Vercel applies the production security headers from `vercel.json`.

The optional Sites packaging workflow uses `npm run build:sites` and `npm run test:sites`. It requires `.openai/hosting.json` from the Sites hosting setup.

The homepage includes a decorative Three.js scene and a static image fallback. The Google Search Console ownership verification file in `public` must remain in the deployment to preserve verification.
