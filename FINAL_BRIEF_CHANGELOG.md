# Seven Films — updated from the client final brief

- Official delivered logo replaces provisional SF text lockup. `seven-films-logo-official.png` is the untouched asset; `seven-films-logo-on-dark.png` is a contrast-optimized derivative for the black nav/footer so the charcoal lettering remains readable.
- Hero kicker becomes “A Premium Video Production Consultant Company.”; description becomes the supplied “Full Service Content Production Consultancy Providers, connected to International Production Network.”
- About / 01 label changed to What We Do. Display headline is **Effective Flair. Global Reach.**; “local” is removed from the intro paragraph.
- New What We Do editorial content + Who We Are panel based on the supplied final brief. The source brief contains the name “Indigo” in its copied paragraph; adapted to Seven Films to avoid misbranding. Client should confirm final wording and the “20+ years” statement.
- Working principles updated to **Ideas first. Collaboration always.** and **One Team. More Partners.**
- Work selection, brands and production partner logos retained.
- Services section visible: 12 disciplines from the brief, after Selected Work.
- Production network updated heading and India removed. Market count now **07** everywhere, with live count-up.
- New contact details from the final brief: producer Muhammad Yaseen, proprietor Salman Hasan, +92 321 870 7806, and the DHA Karachi address. Earlier telephone/address replaced.
- Upcoming ventures remain hidden, and social URLs remain unlinked until confirmed by the client.

## Local testing
`npm ci && npm run build && npm run preview`

## cPanel deployment
After verifying the live preview and backing up the current site, upload **only** the contents of `dist/` to `public_html`, not React source. Keep `.htaccess`, `.well-known` and server-related folders. Review legacy PHP/forms files before replacing anything. If `dist/assets/` collides with old `assets/`, move the old folder aside first or remove it only after backup and confirmation.
