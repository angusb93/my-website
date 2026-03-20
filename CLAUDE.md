# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev       # Dev server with Turbopack on port 3000
bun build     # Production build
bun lint      # Biome linting
```

## Architecture

Next.js 15 (App Router) personal portfolio site with an interactive 3D scene as the hero. Uses React Three Fiber for 3D rendering and Bun as the package manager.

**Path alias:** `@/*` → `src/*`

### 3D Scene Pipeline

The hero is a full-screen fixed 3D canvas layered behind scrollable content:

1. `src/app/page.tsx` — client component, tracks mouse position and scroll depth, applies dynamic blur/darkness filters to `HeadScene`, renders scrollable sections on top
2. `src/components/HeadScene.tsx` — R3F `Canvas` setup (camera, lighting, environment map from `public/world.png`), animates the head on load via `@react-spring/three`, lerps rotation toward mouse position each frame
3. `src/components/Model.tsx` — gltfjsx-generated loader for `public/models/maHead.glb`

### Scroll Effects

- Blur: `Math.min(scrollY / 100, 5)` px applied to the canvas wrapper
- Darkness overlay: opacity `Math.min(scrollY / 200, 0.7)`

### Styling

Tailwind CSS v4 via PostCSS. Global dark radial gradient background defined in `src/app/globals.css`. Use `cn()` from `src/utils/cn.ts` for conditional class merging. Please prefer cn() object notation for readability.

### Code style

- Dont use 1 line if statements, always use curly braces
- Define constants for any magic numbers (e.g. scroll thresholds) and use descriptive names. In caps outside of the component at the top of the file. like, `THIS_IS_A_SCROLL_THRESHOLD = 100`
- For any top level functions or react components always use function declarations, not arrow expressions.
- For any serious functions, add JSDoc comments describing the parameters and return value. For React components, add a description of the props and their types.
