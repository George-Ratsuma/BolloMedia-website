## Purpose
Short guidance to help AI coding assistants be productive in this repository (React + Vite SPA).

## Big picture
- Single-page React app created with Vite. Entry: `index.html` -> `src/main.jsx` which mounts `<App />` inside a `BrowserRouter`.
- Routing and page-level transitions are defined in `src/App.jsx` using `react-router-dom` and `framer-motion` AnimatePresence; each route wraps its page in a `motion.div` with `pageVariants`.
- UI is split into small presentational components under `src/components/` and pages under `src/pages/` (e.g. `Home.jsx`, `About.jsx`).
- Static assets (images) live in `public/assets/` and are referenced with absolute paths like `/assets/gallery/gallery1.jpg`.

## Dev / build / test workflows
- Start dev server with: `npm run dev` (runs `vite`).
- Build for production: `npm run build`.
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (runs ESLint across the repo).

## Project-specific conventions (follow these exactly)
- File layout: place reusable UI pieces in `src/components/`, full pages in `src/pages/`, global styles in `src/index.css` and component-specific CSS next to the component (e.g. `src/components/Navbar.css`).
- Routing: use `react-router-dom` v7 style `Routes`/`Route`. Keep route paths in `src/App.jsx` and wrap page elements in `motion.div` for consistent transitions.
- Animation: use `framer-motion` for page and small element animations. Page transitions use `pageVariants` and a shared `pageTransition` in `src/App.jsx`.
- Styling: this project uses hand-written CSS (see `src/index.css`) and simple utility classes like `container-max`, `grid-3`, `font-display`, `h1`, `text-muted`. Do not assume Tailwind or CSS-in-JS.
- Assets: reference images with absolute `/assets/...` paths so Vite serves them from `public/assets/`.

## Integrations & external deps to be aware of
- Vite + `@vitejs/plugin-react` (see `vite.config.js`).
- React 19 and `react-router-dom` for routing.
- `framer-motion` for animations.
- ESLint configuration enforced via `npm run lint` (see top-level `eslint.config.js`).

## Code patterns & examples (copyable hints)
- Route with motion wrapper (in `src/App.jsx`):

- Example: pages wrap

  In `src/App.jsx`, each `<Route>`'s `element` is a `<motion.div initial=... animate=... exit=... variants={pageVariants} transition={pageTransition}><Page/></motion.div>` — keep that pattern when adding new pages.

- Example: assets

  Use `<img src="/assets/gallery/gallery1.jpg" />` (images live in `public/assets/`).

## Small rules for editing
- Keep components small and presentational where possible. New pages belong in `src/pages/` and route registration goes into `src/App.jsx`.
- When adding styles prefer adding class names and updating `src/index.css` or create a component-level CSS file next to the component.
- Avoid introducing a different styling framework (e.g., Tailwind) without repository-wide agreement.

## Where to look for details
- App entry & routing: `src/main.jsx` and `src/App.jsx`.
- Global styles: `src/index.css`.
- Representative components: `src/components/Navbar.jsx`, `src/components/Hero.jsx`, `src/components/Footer.jsx`.
- Scripts & dependencies: `package.json`.

If anything above is unclear or you'd like me to expand any section (examples for adding a new page + route, testing guidance, or ESLint rules), tell me which part to iterate on.
