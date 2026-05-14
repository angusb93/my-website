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

1. `src/app/page.tsx` — server component, fetches latest article, renders `HomeWrapper`
2. `src/components/HomeWrapper.tsx` — client component, owns `loaded` state, drives entrance animations
3. `src/components/HomeBackground.tsx` — client component, tracks mouse/scroll, renders `HeadScene`
4. `src/components/HeadScene.tsx` — R3F `Canvas` setup (camera, lighting, environment map from `public/world.jpg`), animates the head on load via `@react-spring/three`, lerps rotation toward mouse position each frame
5. `src/components/Model.tsx` — loads `public/models/maHead.glb` via `useGLTF`, rendered with `<primitive>`

### Scroll Effects

- Blur: `Math.min(scrollY / 100, 5)` px applied to the canvas wrapper
- Darkness overlay: opacity `Math.min(scrollY / 200, 0.7)`

### Styling

Tailwind CSS v4 via PostCSS. Global dark radial gradient background defined in `src/app/globals.css`. Use `cn()` from `src/utils/cn.ts` for conditional class merging. Prefer `cn()` object notation for readability.

## Code Style

### Types

- Use `type` over `interface`
- Prefer enums over string literal unions
- Avoid `as` type assertions — prefer type guards, runtime validation, or narrowing. Exception: viem contract return types where generics cannot express the shape
- Avoid non-null assertions (`!`) — use explicit checks or guard clauses so TypeScript can narrow the type naturally
- Type blockchain addresses as `Address` from viem (`import type { Address } from "viem"`) — prefer the named type over inline `` 0x${string} `` literals

### Variables and constants

- Prefer `const` — avoid `let` unless unavoidable (e.g. try/catch assignments)
- Extract magic numbers and strings into named constants at module scope — SCREAMING_SNAKE_CASE, e.g. `BLUR_SCROLL_DIVISOR = 100`
- Use enums for related discrete values

### Functions

- Use function declarations (`function foo()`) for standalone/top-level functions and React components. Arrow functions are fine for inline callbacks
- Guard clause pattern — check for invalid/error cases first, return early, then handle the happy path
- Keep functions focused — extract long functions into smaller named helpers
- Move pure functions to module scope — do not define them inside components where they'd be recreated each render
- Use `useCallback` for impure/stateful functions passed as props or used in dependency arrays
- Use `useMemo` for expensive computations — do not recompute derived data on every render
- Construct regex and other reusable objects at module scope, not inside functions or components

### Error handling

- Wrap async operations (fetch, contract calls, file I/O) in try/catch — do not let errors propagate silently
- Avoid nested try/catch — flatten into sequential operations or extract inner logic into helper functions
- Type catch parameters as `unknown` and narrow with `instanceof` — never `catch (err: any)`

### Imports and utilities

- Import named exports directly (`import { useEffect } from "react"`), not via namespace (`React.useEffect`)
- Use `URL` for URL construction instead of string templates
- Avoid `utils/` as a top-level folder — use specific names: `services/` for data fetching, `formatters/` for formatting, `validators/` for validation, etc.

### Loops and iteration

- Prefer `for (const x of ...)` over `.forEach()` or index-based `for` loops

### JSX

- Always use curly braces for if statements — no single-line if
- Use ternaries instead of `&&` for conditional rendering to avoid rendering `0` or `""`:
  ```tsx
  // Good
  {items.length > 0 ? <List items={items} /> : null}
  // Bad — can render 0
  {items.length && <List items={items} />}
  ```
- Break large conditional renders into named sub-components (Loading, Empty, Populated) in the same file
- Consolidate repeated UI patterns into reusable components
- Handle singular/plural in display text: `` `${count} ${count === 1 ? "item" : "items"}` ``

### File organisation

- Keep component files focused — when a file exceeds ~500 lines, extract self-contained pieces into separate files in the same directory
- Add JSDoc comments to any serious function or React component, describing parameters and return value

### 3D / R3F specific

- Define constants for any magic numbers at the top of the file in SCREAMING_SNAKE_CASE
