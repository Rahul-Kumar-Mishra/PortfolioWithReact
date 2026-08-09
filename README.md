# Rahul Mishra — Backend Engineering Portfolio

A responsive React 19 + TypeScript portfolio with Framer Motion animations and Tailwind CSS utilities. Content lives in `src/data/portfolio.ts`; update that one file for projects, experience, skills, links, and gallery entries.

## Local development

```bash
npm install
npm run dev
```

Build a production bundle with `npm run build`.

## Deploy

- **Vercel:** import the repository; build command is `npm run build`, output is `dist`.
- **Netlify:** import the repository; `netlify.toml` applies the correct build and SPA redirect.
- **GitHub Pages:** enable GitHub Pages with **GitHub Actions** as the source; the included workflow deploys pushes to `main`.

Before deploying, add real assets as described in `public/images/README.md` and replace `public/resume.pdf` with a real PDF.
