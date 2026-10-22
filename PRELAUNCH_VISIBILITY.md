# Seven Films — pre-launch visibility (V10)

This iteration was based on the supplied V9 project. The existing layout, work portfolio,
brands, services, and eight production markets remain intact.

## Currently hidden from the public site

1. The complete **Production Partners carousel section**. The component, all six
   partner entries, partner images, and carousel behavior are still in the source.
   The **Brands We Work With** section stays visible.
2. The **Proprietor and Producer names** in the contact introduction.
3. The **direct producer phone number** and its clickable `tel:` contact row.

Other contact methods (company email, website, office address) remain visible.
No fake placeholder cards, masked numbers, or empty role labels are shown; hidden
blocks are unmounted and the responsive layout closes the space cleanly.

## Re-enable after client approval

Open `src/data/siteData.js` and change these switches:

```js
showProductionPartners: true,
showContactPeople: true,
showContactPhone: true,
```

All data and UI components have been preserved; no new packages were introduced.

**Visibility caveat:** These switches hide content in the rendered website; the
source repository still contains the names, phone number and partner assets.
Do not treat front-end visibility flags as an access-control/privacy mechanism.
If the underlying details must be confidential, remove them from publicly shared
source repositories and public build assets as well.

## Deployment

- Run `npm install` (or `npm ci`) and `npm run build` locally.
- Commit and push the changes to the existing GitHub repo to trigger Vercel deploy.
- Confirm the Vercel preview before updating cPanel; cPanel receives only `dist/`
  **contents**, not the React source ZIP.
- Keep the previous live site's backup and its `.htaccess` / `.well-known` files.
