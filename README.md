# Seven Films Website Prototype — V7

— Website Prototype V6

Premium React/Vite front-end direction for Seven Films, structured as reusable components rather than a deck-to-web translation.

## V6 refinements

- Hero CTAs use a cleaner production-studio treatment: white pill primary action + understated discovery link.
- Responsive overflow in the editorial “Way We Work / Our Strength” cards is fixed; long headlines no longer crop.
- Production-partner artwork was re-extracted from the supplied reference and is rendered with `object-fit: contain` inside consistent plates, so marks are not accidentally clipped.
- Partner order follows the supplied Production Partners artwork.
- Contact hierarchy includes the supplied “Do you have any questions?” prompt, website, email, phone, Karachi office address, and placeholders for the social channels visible in the profile.
- About retains the supplied local/global positioning and “From script to screen, effortlessly.” language.
- The approved red/black Production Network section remains unchanged.
- Services and Upcoming Ventures remain feature-flagged off until client content is finalized.

## Stack

React 18, Vite, Framer Motion, Lucide React, centralized CSS custom properties, reusable data-driven components, and responsive CSS.

Framer Motion remains the single motion layer for this prototype. GSAP is intentionally not mixed in unless a later showreel/pinned-scroll sequence genuinely needs timeline/scrub control.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Upload the generated `dist/` directory to a standard cPanel document root, or deploy the repository through Vercel/Netlify.


## V7 notes
The production-network layout uses the preferred V4 red/black composition. Partner artwork uses the V5 safe padded crops. The contact/footer has compact actionable rows and proper social-platform icons; company-specific social URLs must be supplied before those icons are made live links.
