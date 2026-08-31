# hildieleyser.github.io

Personal site for Hildelith Leyser, neuroscientist and neurotechnologist.

Built with [Astro](https://astro.build). Every page is static HTML, so search
engines and link previews read the real content rather than an empty shell.

## Develop

```bash
npm install
npm run dev      # local dev server on :4321
npm run build    # static build into dist/
npm run preview  # serve the built site
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. Nothing built is committed to the repo.

## Editing content

| What | Where |
| --- | --- |
| Projects | `src/content/projects/*.md` — one file per project, frontmatter plus prose |
| Project images | `src/assets/projects/` — referenced from frontmatter, resized at build |
| CV | `src/data/cv.ts` |
| Bio, capabilities, research, writing | `src/data/site.ts` |
| Colours, type scale, spacing | `src/styles/global.css` |
| Social preview image | `public/og-default.png` |

Adding a project means dropping a Markdown file into `src/content/projects/`.
It picks up a card on the home page and its own page at `/projects/<filename>/`.
The `order` field controls where it lands in the running order.

Images live in `src/assets/` rather than `public/` so Astro can resize them and
emit WebP. A 1.4 MB source PNG ships as roughly 30 kB.
