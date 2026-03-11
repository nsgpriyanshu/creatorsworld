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
