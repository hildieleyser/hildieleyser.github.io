# hildieleyser.github.io

Personal site for Hildelith F. Leyser, neuroscientist and neurotechnologist.

Built with [Astro](https://astro.build). Every page is static HTML, so search
engines and link previews read the real content rather than an empty shell.
No framework JavaScript ships.

## Develop

```bash
npm install
npm run dev      # local dev server on :4321
npm run build    # static build into dist/
npm run preview  # serve the built site
```

## Editing content

| What | Where |
| --- | --- |
| Projects | `src/content/projects/*.md` — one file per project, frontmatter plus prose |
| Project images | `src/assets/projects/` — referenced from frontmatter, resized at build |
| CV | `src/data/cv.ts` |
| Bio, capabilities, research | `src/data/site.ts` |
| Analytics and newsletter keys | `services` in `src/data/site.ts` |
| Colours, type scale, spacing | `src/styles/global.css` |
| Social preview image | `public/og-default.png` |

Adding a project means dropping a Markdown file into `src/content/projects/`.
It picks up a row on the home page and its own page at `/projects/<filename>/`.
The `order` field controls where it lands in the running order.

Images live in `src/assets/` rather than `public/` so Astro can resize them and
emit WebP. A 1.4 MB source PNG ships as roughly 30 kB.

## Deploying on Netlify

`netlify.toml` holds the build command, publish directory, cache headers and
redirects. Nothing built is committed.

1. In Netlify, **Add new site → Import an existing project**, and pick this
   GitHub repo. It reads `netlify.toml`, so no settings need typing in.
2. Every push to `main` deploys. Pull requests get preview URLs.

### Pointing the Strato domain at it

1. Netlify → **Domain management → Add a domain**, enter the domain.
2. Netlify shows its nameservers. In the Strato control panel, under the
   domain's DNS settings, replace Strato's nameservers with Netlify's.
   Nameserver changes can take up to 48 hours to propagate.
3. Alternatively keep Strato's DNS and add the records Netlify lists: an
   `ALIAS`/`ANAME` on the apex to `<site>.netlify.app`, and a `CNAME` on
   `www` to the same. Use this route if other Strato services depend on the
   existing nameservers.
4. Netlify provisions the TLS certificate once DNS resolves. Turn on
   **Force HTTPS**.
5. Set `SITE_URL` to the final origin in **Site configuration → Environment
   variables**, so canonical links, Open Graph tags and the sitemap use the
   real domain rather than the github.io one.

## Analytics and newsletter

Both are off until configured, and emit nothing while empty. Fill in
`services` in `src/data/site.ts`:

- **GoatCounter** — create a site at [goatcounter.com](https://www.goatcounter.com).
  Set `goatcounter` to your site code, the `XXX` in `XXX.goatcounter.com`.
  The counting script only loads once this is set.
- **Loop** — create a signup form at [loops.so](https://loops.so). It gives a
  form endpoint ending in an id. Set `loopsFormId` to that id. The subscribe
  form then appears in the contact section.
