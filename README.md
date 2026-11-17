# clamcentral.com

CLAMcentral rebuilt with Astro + Tailwind, hosted on Cloudflare.

## Where things are

| File | What it controls |
| --- | --- |
| `src/styles/global.css` | Site-wide fonts and colors (Poppins 18px / 1.35em body, Boldonse headlines) |
| `src/data/site.ts` | Top menu, footer links, donation link |
| `src/components/Header.astro`, `Footer.astro` | The black header bar and the cream footer on every page |
| `src/components/Button.astro` | The standard dark button |
| `src/pages/index.astro` | The homepage |
| `public/images/` | Pictures used on the pages |

Page addresses match the old WordPress site (for example `/about/`), so existing links keep working.

## Still to do

- Connect the newsletter sign-up form to ActiveCampaign (it doesn't send yet).
- Replace the SureCart donation link with a PayPal donation link.
- Rebuild the other pages.
- Serve the PDFs from Cloudflare R2 at their old `/wp-content/uploads/...` addresses.
