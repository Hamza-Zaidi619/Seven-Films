# Seven Films — Partners & Network update (V9)

- Replaced Dark Rooms (`partner-01`) with the supplied Macaw Post Production logo.
- Added Two9Two Production Studios as the sixth partner, using the supplied artwork.
- Retained OEC6 Middle East, Epic Pictures, ARY Digital and Elite Films, in the existing order.
- Built a lightweight Swiper-style production-partner carousel: native horizontal scroll snap, swipe/trackpad, keyboard left/right, previous/next controls, progress bar, accessible labels, and responsive 5/3/2/1.28-card layouts.
- Purposefully uses no extra carousel dependency, to keep existing Vite deployment and package lock stable.
- Macaw and Two9Two partner plates are clickable using only the URLs supplied by the client.
- Added Malaysia to the production network; animated counter and studio statistic now show 08 markets.
- Kept all other brand logos, selected work, section order, primary design system, and contact information unchanged.

## Deploy

Run `npm install` then `npm run build`. Replace the prior V8 source files in the connected Git repository and push to `main` to trigger the existing Vercel deployment. For cPanel upload **only** the generated `dist/` contents after backing up live files.
