# Seven Films — Selected Work Video Playback Update

## Changed
- Clicking a selected-work card opens a responsive **on-site video player** instead of immediately navigating to Vimeo or YouTube.
- Desktop **mouse hover** starts a muted, looping preview after a 350ms delay. Moving the pointer away unmounts the embed and stops playback.
- **Mobile/touch** skips hover playback and opens the player on tap.
- Keyboard: Tab to a card and press Enter/Space to open; Escape or the Close button exits the player and restores focus.
- All 13 existing work links are supported: 12 Vimeo, 1 YouTube.
- The source Vimeo/YouTube link remains available in the modal only as a fallback if an owner has disabled embedding or the browser refuses playback.
- No additional runtime packages; uses the existing React, Framer Motion and Lucide dependencies.

## Vimeo embed requirement
Video owners may restrict where Vimeo players are embedded. If a card shows an error in its embedded player, confirm the video owner allows embedding on `sevenfilms.net` and your Vercel preview hostname. A successfully playing video on vimeo.com does NOT automatically guarantee it can be embedded elsewhere. Autoplay with sound may be blocked; the modal retains player controls for manual playback. Browser 'reduce motion' preferences disable hover autoplay.

## Unchanged
- Partner section remains temporarily hidden through `siteConfig.showProductionPartners: false`.
- Proprietor / Producer names and the telephone number stay hidden through `siteConfig.showContactPeople` and `showContactPhone`.
- Existing design, layout, projects, image thumbnails, services, logo and 8-market production network are retained.

## Deploy
1. Copy this source into the **already cloned** `Seven-Films` GitHub-connected folder; preserve `.git`.
2. `npm install` if dependencies are absent, then `npm run build`.
3. `git add -A && git commit -m "Play selected-work videos on-site" && git push origin main`.
4. After checking the Vercel preview, upload **only** the current local `dist/` contents to cPanel `public_html/`, preserving `.htaccess`, `.well-known`, and other retained hosting files. Back up the currently deployed site first. Vercel redeployment does not automatically update cPanel.
