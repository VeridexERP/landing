# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Veridex ERP landing page built with Astro, React, TypeScript, Tailwind CSS v4, and shadcn/ui (base-nova style).

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — ESLint
- `npm run format` — Prettier (ts, tsx, astro files)
- `npm run typecheck` — `astro check`

## Architecture

- **Astro** is the framework — pages are `.astro` files in `src/pages/`, layouts in `src/layouts/`
- **React** components use `client:load` (or other client directives) when interactive behavior is needed in `.astro` files
- **shadcn/ui** components go in `src/components/ui/` — add new ones with `npx shadcn@latest add <component>`
- `src/lib/utils.ts` exports the `cn()` helper for merging Tailwind classes
- Path alias: `@/*` maps to `./src/*`

## Styling

- Tailwind CSS v4 via Vite plugin (not PostCSS) — configured in `astro.config.mjs`
- Global styles and design tokens in `src/styles/global.css` using CSS custom properties (oklch color space)
- Font: Inter Variable
- shadcn config: `components.json` (base-nova style, neutral base color, lucide icons, CSS variables enabled)

## Formatting

- No semicolons, double quotes, 2-space indent, trailing commas (es5), LF line endings
- Prettier plugins: `prettier-plugin-astro`, `prettier-plugin-tailwindcss`
