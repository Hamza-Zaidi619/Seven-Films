# Deployment Notes

## Vercel / Netlify preview
1. Push this folder to a Git repository.
2. Import the repository in Vercel or Netlify.
3. Build command: `npm run build`
4. Output directory: `dist`

## cPanel production
The website is designed to deploy as static built files, so a Node server is not required after build.

Before final deployment confirm:
- domain / subdomain
- document root
- SSL status
- whether the current preview page should be replaced or kept temporarily
- whether any existing WordPress / CMS install shares the same document root

Then run `npm run build` and upload the contents of `dist/` to the confirmed document root.
