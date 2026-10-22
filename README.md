# Seven Films — final brief implementation

Premium, responsive React/Vite website for Seven Films, based on the client's **Seven Films Website Brief final.pdf**, with the user's requested overrides. The supplied brands and production-partner grids, portfolio, red/black network system and Framer Motion reveals are retained.

## Requirements
Node.js 18+ and npm.

## Start locally
```bash
npm ci
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```
Output is `dist/` — for standard cPanel hosting, deploy **the contents** of `dist/` into the confirmed document root, not the source code. Test preview URL first; do not delete existing cPanel files without a backup and owner approval.

### Current navigation
About · Work · Services · Network · Contact.

### Final-brief edits
See `FINAL_BRIEF_CHANGELOG.md` for precise changes, content decisions and updates. Note in particular: **India removed and Malaysia added**, **08 markets**, **12 services**, official Seven Films logo, latest contact details and phone from the final brief. `Upcoming Ventures` is intentionally hidden.

### Architecture
- React 18, Vite 5, Framer Motion
- Lucide React, React Icons
- Separate components under `src/components/`
- Data at `src/data/siteData.js`
- CSS variables at `src/styles/tokens.css`, styles in `global.css` and `components.css`
- One-page anchors. No Node.js server is required after building the static output.

### Final client confirmations
- Official brand guidelines for contrast-optimized logo on dark backgrounds
- The provided brief's wording contains **Indigo**; site copy uses **Seven Films** instead (confirm editorial text and the **over 20 years** claim)
- Social handles/URLs (icons are placeholders, not fake links)
- Project credits and portfolio permissions
- Hosting/domain SSL and cPanel document root

### Test checklist
Desktop (1440+), laptop (1024), tablet (768), mobile (390/375/320): check nav, headline wrapping, new about content, Services, 7 network markets, all brand/partner logos, clickable contact info and animated counters. Respect reduced-motion settings.

## Partner carousel update (V9)

See `PARTNERS_NETWORK_UPDATE.md`. Macaw replaces the first partner, Two9Two is added, and the country count is 08. The carousel is built on native CSS scroll snap for touch, desktop drag/trackpad, arrows and keyboard navigation; **Swiper is not installed** to avoid an extra runtime dependency.
