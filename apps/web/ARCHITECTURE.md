# Architecture

## Design Philosophy (UI)

The hero component establishes the visual system for this site. Key principles:

- **Monochrome first:** Use shadcn token colors (`background`, `foreground`, `muted`, `border`, `card`, `secondary`) and avoid hard-coded brand colors unless explicitly required.
- **Layered depth:** Build subtle depth with stacking, shadows, and light gradients rather than loud colors. Use rounded containers, soft borders, and controlled contrast.
- **Structured hierarchy:** Lead with a bold, stacked headline; follow with a short supporting line and a single primary action. Sections are clearly separated with borders and spacing.
- **Graphic weight distribution:** Balance heavy text blocks with a strong media panel, then add “proof” rows (logos, stats, testimonials) to anchor trust.
- **Motion with restraint:** Use `AnimationContainer` for staged reveals (fade/slide). Keep animation simple and consistent, not flashy.
- **Responsive intent:** The same structure should compress cleanly on mobile (stacked layout, tighter spacing) while preserving hierarchy.

When creating new sections or pages, match this approach: monochrome palette, layered depth, clean typographic hierarchy, and restrained motion.

## SEO Architecture

SEO is centralized rather than defined ad hoc per page.

- **Single metadata source:** Use `apps/web/utils/metadata.ts` for all page metadata. Route layouts and dynamic pages should call `createMetadata(...)` instead of building raw metadata objects unless there is a clear exception.
- **Canonical-first:** Every indexable route should set a stable `path` so canonical URLs are generated consistently from `NEXT_PUBLIC_SITE_URL`.
- **Shared defaults:** Default robots, Open Graph, Twitter, icons, manifest, and site-level fields are managed in the metadata helper and should not be redefined page-by-page without reason.
- **Real assets only:** Social images referenced in metadata must exist in `apps/web/public`. Avoid placeholder `/og/*` paths unless those assets or route handlers actually exist.
- **Structured data where it matters:** Root layout injects `Organization` and `WebSite` schema. Entity pages should add route-specific JSON-LD:
  - blog post pages: `BlogPosting` and `BreadcrumbList`
  - product pages: `Product`
  - other marketing routes can add `FAQPage`, `Service`, or `ContactPage` when useful
- **Crawler surfaces:** `apps/web/app/robots.ts` and `apps/web/app/sitemap.ts` are the source of truth for crawler discovery. When new public routes are added, update the sitemap.
- **Noindex behavior:** Non-existent or intentionally non-public pages should return metadata with `noIndex: true`.

## Route Metadata Conventions

- Static route groups should export `metadata = createMetadata({...})` from their `layout.tsx`.
- Dynamic routes should export `generateMetadata(...)` and derive title, description, canonical path, image, and keywords from route data.
- Prefer concise titles with the site name suffix, for example: `Page Title | Creator's World`.
- Use route-specific keywords only where they are real descriptors, not keyword stuffing.

## Verification

Before shipping metadata changes:

- run `npm --prefix apps/web run check-types`
- run `npm --prefix apps/web run build` when `.next` is not locked by another process
- sanity check sitemap coverage for any newly added public route
