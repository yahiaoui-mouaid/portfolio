# Mouaid Yahiaoui, portfolio

Static site built with [Astro](https://astro.build). No client framework: the only JavaScript is the
theme toggle and Astro's view-transition router.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

## Editing content

- Projects: `src/data/projects.ts` (each project lists what I wrote and what the AI wrote).
- Videos: `public/videos/<name>.mp4`, with a poster frame in `src/assets/posters/`. To add one, compress it first, for example:
  `ffmpeg -i in.mp4 -an -vf "scale=1280:-2,fps=30" -c:v libx264 -preset slow -crf 28 -movflags +faststart public/videos/name.mp4`
- Path (education, club), about, skills, certificates and contact: `src/pages/index.astro`.
- The laptop hero and its terminal lines: `src/components/Hero.astro`.

## Deploying

Any static host works (Netlify, Vercel, Cloudflare Pages, Render static site): build command
`npm run build`, publish directory `dist`. Set `site` in `astro.config.mjs` to the final URL.

If you deploy to GitHub Pages under `/portfolio/`, also set `base: '/portfolio'` in
`astro.config.mjs` and prefix internal links with `import.meta.env.BASE_URL`.
