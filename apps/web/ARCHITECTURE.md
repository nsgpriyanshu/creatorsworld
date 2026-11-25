# Web Application Architecture

## Architecture Goals

- Keep the web app as a modular Next.js monolith; use domain boundaries without adding unnecessary service layers.
- Keep routing and composition in the App Router, and keep feature behavior inside the owning feature.
- Prefer explicit, typed boundaries between routes, domain data, infrastructure, and shared UI.
- Migrate incrementally. Do not move every route or rewrite working components as part of an unrelated change.

## Application Boundaries

### App Router

`apps/web/app` owns URL structure, route-level layouts, metadata, loading and not-found states, route handlers, and page composition. Page files should stay thin: load or validate route inputs where needed and compose the relevant feature UI.

Route groups may organize layouts without changing public URLs. Keep public paths stable unless a URL migration is intentional and includes redirects.

### Features

`apps/web/features/<feature>` owns UI and content specific to a product area. Feature components may use shared UI and infrastructure, but unrelated features should not import each other's internals.

Feature-owned content and configuration belongs beside its feature in `data/`, with exported TypeScript types where they improve safety.

Migrated feature slices:

- `features/service/components` contains service-page sections and the currently disabled testimonial component.
- `features/service/data` contains service-specific FAQs, pricing, showcase, testimonials, and offering content.
- `app/service/page.tsx` composes those components; it does not own service presentation or content.
- `features/product/components` contains the product catalog and item detail UI.
- `features/product/data/products.ts` owns the product catalog data and type.
- Product routes and `app/sitemap.ts` consume product data from the feature.
- `features/blog/components`, `features/blog/server`, and `features/blog/types.ts` own blog UI, data access, and domain types.
- `features/contact/components`, `features/contact/server`, and `features/contact/schema.ts` own contact UI, submission handling, and validation. The App Router API file remains a thin HTTP adapter.
- `features/legal/components` and `features/legal/data` own legal and brand-guideline UI and content.
- `features/community/components` and `features/community/data` hold former homepage/community sections. They are intentionally unmounted so the root homepage remains minimal.

Avoid compatibility barrels unless multiple real consumers need them.

### Shared UI and Infrastructure

- `apps/web/components/global` contains app-wide layout and behavior that is not owned by one feature.
- `packages/ui` contains reusable design-system primitives shared across apps.
- `apps/web/lib` owns shared infrastructure such as Supabase clients. Feature-specific server queries and validation live in the owning feature; keep server credentials and server-only integrations out of client components.
- `apps/web/constants` should contain genuinely cross-feature constants only. Feature-specific content belongs in its feature's `data/` directory.

## Rendering and Data Flow

- Prefer Server Components and server-side data access by default.
- Add `"use client"` only for browser state, event handling, or browser-only libraries; keep client boundaries as small as practical.
- Validate external input at route, API, and data boundaries. Use explicit error handling rather than silently returning success-shaped fallbacks.
- Load expensive, optional UI only when it is needed. Disabled sections should not be imported by active route pages.
- Keep domain data separate from presentation so it can be validated and tested without rendering a page.

## Routing and SEO

- Route layouts and dynamic pages use `utils/metadata.ts` and provide an explicit canonical `path`.
- Keep redirects centralized in `next.config.js` or in a route handler when the redirect depends on request data; avoid duplicating a redirect in both places.
- Every redirect destination must resolve to a real route.
- Keep `app/robots.ts` and `app/sitemap.ts` aligned with public, indexable routes. Do not include redirect-only or unavailable destinations in the sitemap.
- Use `notFound()` for unknown dynamic records and provide route-specific not-found UI where useful.
- Add structured data only when it describes visible, real content: `BlogPosting`, `Product`, meaningful `BreadcrumbList`, and supported service or contact entities.

## UI Design System

- Use the existing monochrome-first shadcn tokens (`background`, `foreground`, `muted`, `border`, `card`, and `secondary`). Avoid hard-coded visual colors unless the existing component intentionally uses them.
- Build depth with restrained shadows, borders, and gradients; keep layout hierarchy clear and responsive.
- Reuse `AnimationContainer` for staged reveals and respect reduced motion for major animations.
- Preserve accessible names, heading hierarchy, keyboard access, and the rule against nested interactive elements.

## Testing and Delivery

For meaningful web changes, run:

- `npm --prefix apps/web run check-types`
- `npm --prefix apps/web run test`
- `npm --prefix apps/web run lint`
- `npm --prefix apps/web run build` when the `.next` directory is not locked by another process

Add focused tests for new behavior. Route smoke tests should cover primary public paths, redirects and their destinations, unknown dynamic records, and sitemap coverage. Browser checks should verify the visible page and navigation rather than only checking that a request returns successfully.

## Migration Notes

- Service, product, blog, contact, and legal are organized as features. Legacy community content is organized under its feature but intentionally remains unmounted.
- `/archive` remains a valid legacy URL with a noindex placeholder; it does not mount the legacy community content.
- Preserve working URLs and behavior during migration. Remove dormant legacy modules only after confirming they are no longer needed.
- Keep the migration scoped to the feature being changed and update this document when boundaries or ownership change.
