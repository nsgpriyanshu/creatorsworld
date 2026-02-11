export const PRICING_PLANS = [
  {
    id: "web-management",
    name: "Web Management",
    type: "subscription",
    price: "Monthly Subscription",
    description:
      "Ongoing website management and maintenance to keep your site secure, updated, and running smoothly.",
    features: [
      "Regular website maintenance & updates",
      "Performance monitoring",
      "Security checks & basic fixes",
      "Content updates (within scope)",
      "Technical support & issue resolution",
    ],
    notes: [
      "This plan does not include new website development.",
      "Major changes or new features are billed separately.",
      "Scope is clearly defined at the start of the subscription.",
    ],
    cta: "Request Subscription Details",
    highlighted: false,
  },
  {
    id: "web-dev-design",
    name: "Web Development & Design",
    type: "one-time",
    price: "₹XX,XXX+ / Custom",
    description:
      "Design and development of modern, high-quality websites tailored to your business needs.",
    tiers: [
      {
        id: "base",
        name: "Base (Reference)",
        description:
          "A typical modern website built using Next.js with standard pages and clean UI.",
      },
      {
        id: "enterprise",
        name: "Enterprise",
        description:
          "A fully custom website solution with tailored design, architecture, and integrations.",
      },
    ],
    features: [
      "Custom UI & responsive design",
      "Modern Next.js based architecture",
      "SEO & performance optimization",
      "Scalable and maintainable codebase",
      "Optional post-launch support",
    ],
    notes: [
      "Base pricing is a reference and may vary based on requirements.",
      "Final cost is determined after requirement analysis.",
    ],
    cta: "Submit Project Requirements",
    highlighted: true,
  },
  {
    id: "web-works",
    name: "Web Works",
    type: "enterprise",
    price: "Custom Pricing Only",
    description:
      "Advanced, enterprise-grade web solutions built for scalability, complex workflows, and long-term growth.",
    features: [
      "Custom system architecture & planning",
      "Complex workflows & business logic",
      "Third-party & custom integrations",
      "High-performance & security-focused setup",
      "Dedicated consultation & execution",
    ],
    notes: [
      "This service is strictly requirement-based.",
      "Pricing, timeline, and scope are defined after analysis.",
      "Suitable for businesses with complex or large-scale needs.",
    ],
    cta: "Discuss Your Requirements",
    highlighted: true,
  },
] as const;
