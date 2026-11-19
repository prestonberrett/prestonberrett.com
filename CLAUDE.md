# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start dev server at localhost:4321
pnpm build     # Build production site to ./dist/
pnpm preview   # Preview production build locally
```

Use `pnpm` as the package manager (not npm or yarn).

## Architecture

This is an **Astro 6** personal website with file-based routing and scoped CSS (no Tailwind or other CSS framework).

- `src/pages/` — File-based routes. Each `.astro` file becomes a URL path.
- `src/layouts/` — Layout wrappers that provide the HTML shell (`<head>`, `<body>`, `<slot />`).
- `src/components/` — Reusable UI components imported into pages/layouts.
- `src/assets/` — Images/SVGs imported directly into components (processed by Astro/Vite).
- `public/` — Static assets served as-is (favicons, etc.).

Pages compose layouts and components: a page imports a Layout, wraps content in it, and uses components inside. Styles are scoped to their component via `<style>` blocks.

TypeScript is configured with Astro's strict preset (`astro/tsconfigs/strict`). Generated types live in `.astro/types.d.ts` (gitignored).
