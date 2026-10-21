# Jyothis Francis - Developer Portfolio

Single-page portfolio for Jyothis Francis, Senior Developer and Systems Analyst. Built with React 19 and Vite, with no UI framework dependencies.

## Sections

- Sticky navigation with a keyboard-accessible mobile menu
- Hero, About, Technical Skills, Experience, Selected Projects, Contact, and Footer

## Project structure

```
public/documents/        Source content (content.md)
src/data/portfolio.js    All text, skills, experience, projects, and contact links
src/components/          One component per section, plus shared Icon and SectionHeading
src/index.css            Global theme tokens and base styles
src/App.css              Component styles and responsive breakpoints
```

## Local development

Prerequisites: a current Node.js LTS release and npm.

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:5173
npm run lint       # run ESLint
npm run build      # create a production build in dist/
npm run preview    # serve the production build locally
```

## Customizing

1. Contact links: open `src/data/portfolio.js` and replace the `TODO` values in the `profile` object (`email`, `linkedin`).
2. Project links: in the `projects` array, set `link` to a URL to show a "View project" button.
3. Content: edit the arrays in `src/data/portfolio.js`. Components render whatever is defined there.

## Deployment

The site is static. `npm run build` outputs a `dist/` folder that any static host can serve.

- **Netlify or Vercel:** connect the repository. Build command `npm run build`, publish directory `dist`.
- **GitHub Pages (project site):** set `base: '/<repository-name>/'` in `vite.config.js` before building, then publish the contents of `dist/`.
- **Any static host:** upload the contents of `dist/`. The site is a single page, so no rewrite rules are needed.
