# Web Design Skill

Use this file as the practical design guide for agent work inside `apps/web`.
For rules-level constraints, also read `AGENTS.md`. For broader product and SEO architecture, read `ARCHITECTURE.md`.

## Purpose

Agents working on the Creator's World web app should preserve the existing structured, monochrome, border-led design system. The site is not built like a loose marketing page. It uses framed sections, dashed separators, restrained motion, and token-based colors.

## App Shape

- Routes and route composition live in `app/`.
- Feature-owned UI and content live in `features/<feature>/components/` and `features/<feature>/data/`.
- Shared layout helpers live in `components/global/`.
- Cross-feature constants live in `constants/`.
- Domain-specific UI and data live in `features/<feature>/`; service, product, blog, contact, legal, and legacy community code follow this pattern.
- Static assets live in `public/`.
- Use shared UI primitives from `@repo/ui/components/ui/*`.

## Core Layout Pattern

Most public sections follow this structure:

```tsx
<Wrapper className="relative w-full overflow-hidden py-12 lg:py-16">
  <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]">
    <div className="h-full w-full bg-[linear-gradient(...)] bg-[size:64px_64px]" />
  </div>

  <section className="mx-auto w-full max-w-6xl rounded-md border border-border">
    {/* badge row */}
    {/* heading row */}
    {/* description row */}
    {/* content grid */}
  </section>
</Wrapper>
```

Keep this structure unless the existing page already uses a different local pattern.

## Visual Language

- Prefer token colors: `background`, `foreground`, `muted`, `muted-foreground`, `border`, `card`, `primary`.
- Use hard-coded colors only when a component already intentionally does so or the user explicitly asks.
- Use `rounded-md` for most containers. Avoid large rounded card stacks unless the local component already uses them.
- Section separation should usually come from `border`, `border-dashed`, and grid cells, not many nested cards.
- Depth should be subtle: light blur, soft shadow, opacity layers, or actual image layering. Avoid loud decorative blobs unless specifically requested.
- Keep text hierarchy clean: large section heading, short description, then structured content.
- Use `text-balance` for large headings where it improves wrapping.

## Section Anatomy

The common section rhythm is:

- Badge row: centered `Badge`, border bottom, icon from `lucide-react`.
- Heading row: `h1` or `h2`, bold, tight tracking, usually centered.
- Description row: muted text, max width, usually centered.
- Content area: grid or media layout separated by dashed borders.

When editing an existing section, preserve row borders and spacing unless the user asks for layout changes.

## Images And Icons

- Use `next/image` for files from `public/`.
- Use `lucide-react` for UI icons.
- For theme-specific assets, render light and dark variants with `dark:hidden` / `hidden dark:block`.
- Keep image `alt` text meaningful unless the image is purely decorative.
- Prefer real assets under `public/` over placeholder graphics.
- When the user asks for icons inside section grids, let the grid create the separation; avoid wrapping each item in another visual card unless requested.

## Motion

- Use `AnimationContainer` for reveal animations.
- Common pattern: `fadeDown` for badge, `fadeUp` for heading/content.
- Stagger delays lightly: `0.15`, `0.3`, `0.45`, then small increments for repeated items.
- Do not add flashy motion or layout-shifting hover effects unless the interaction clearly benefits from it.

## Responsive Rules

- Use `grid-cols-1` on mobile, then `md:grid-cols-2` or `lg:grid-cols-3` depending on the intended layout.
- Keep text readable before preserving decorative image size.
- Avoid fixed widths that can force overflow on mobile.
- Use `min-w-0` for flex text areas next to images/icons.
- Check that visual assets do not cover text unless overlap is explicitly requested.

## Component Editing Rules

- Follow the existing import style and component pattern in the file.
- Keep client components marked with `"use client"` when they already are.
- Do not move data out of constants unless it improves reuse or matches an existing pattern.
- Keep changes scoped to the requested section.
- Do not clean unrelated lint warnings while making design edits unless the user asks.

## Home Page Notes

- The active root route is intentionally a minimal “Creators World” placeholder.
- `features/community/components/` contains sections from the former homepage and is intentionally not mounted on a route. Reuse them only when restoring that content is explicitly requested.

## Service Page Notes

- Service components and content are under `features/service/`.
- `features/service/components/service-hero.tsx` uses a split layout inside the same bordered section pattern.
- `features/service/components/what-you-get.tsx` is more complex and should be edited carefully; preserve its internal interaction and layout assumptions.
- Pricing, FAQ, testimonials, and showcase sections should stay visually aligned with the same border/token system.

## Product Page Notes

- Product catalog and item detail UI live in `features/product/components/`.
- Product definitions and their `Product` type live in `features/product/data/products.ts`.
- Route metadata stays in the App Router; update sitemap generation when indexable products change.

## Verification

Run focused checks after meaningful changes:

```bash
npm --prefix apps/web run check-types
npx eslint components/path/to/file.tsx --max-warnings 0
```

The full app lint may fail because of pre-existing warnings. Prefer focused lint for the file you changed unless the user asks for repo-wide cleanup.
