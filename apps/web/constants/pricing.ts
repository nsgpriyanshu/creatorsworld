export const PRICING_PLANS = [
  {
    id: "base",
    name: "Base",
    type: "starter",
    price: "₹5,000 – ₹10,000",
    payment: "50% upfront, 50% after delivery",
    description:
      "Affordable entry-level website for individuals, startups, or small businesses that need a simple and modern online presence.",

    features: [
      "Up to 5 pages",
      "Static website",
      "Responsive design",
      "Basic SEO setup",
      "Built using modern technologies (Next.js, React, Tailwind CSS)",
      "Clean UI and structured codebase",
    ],

    limitations: [
      "No database integration",
      "No API integrations",
      "No advanced performance optimization",
      "No complex animations",
    ],

    optionalAddons: [
      "Logo design",
      "UI/UX enhancements",
      "Animations",
      "Database integration",
      "API integration",
      "Advanced SEO",
      "Performance optimization",
      "Additional pages",
    ],

    bestFor: [
      "Personal websites",
      "Portfolio websites",
      "Small business landing pages",
      "Static informational websites",
    ],

    notes: [
      "Advanced features from higher plans can be added with additional cost.",
      "Best suited for static content without complex backend systems.",
    ],

    highlighted: false,
  },

  {
    id: "pro",
    name: "Pro",
    type: "business",
    price: "₹20,000 – ₹40,000",
    payment: "50% upfront, 50% after delivery",
    description:
      "Professional website solution for growing businesses that need better performance, improved SEO, and more customization.",

    features: [
      "Custom UI design",
      "Intermediate SEO optimization",
      "Performance optimization",
      "Flexible page structure",
      "Modern stack (Next.js, React, Tailwind CSS)",
      "Optional basic animations",
    ],

    limitations: [
      "API integrations not included by default",
      "Advanced backend systems limited",
    ],

    optionalAddons: [
      "Advanced animations",
      "API integrations",
      "Database systems",
      "Advanced SEO",
      "Custom dashboards",
      "Complex workflows",
      "Additional integrations",
    ],

    bestFor: [
      "Business websites",
      "Company landing pages",
      "Product showcase websites",
      "Growing startups",
    ],

    notes: [
      "Advanced features available in Pro Max can be implemented with additional cost.",
      "Animations and integrations may increase project complexity and cost.",
    ],

    highlighted: true,
  },

  {
    id: "pro-max",
    name: "Pro Max",
    type: "enterprise",
    price: "₹XX,XXX",
    payment: "50% upfront, 50% after delivery",
    description:
      "Fully custom, high-performance web solutions designed for businesses that need advanced features, integrations, and scalable architecture.",

    features: [
      "Fully custom UI & architecture",
      "Advanced SEO optimization",
      "Performance optimization",
      "API integrations",
      "Database integration",
      "Scalable system architecture",
      "Tailored development based on requirements",
    ],

    optionalAddons: [
      "Advanced animations",
      "Additional integrations",
      "Custom enterprise features",
      "Extended system capabilities",
    ],

    bestFor: [
      "Large businesses",
      "Advanced product websites",
      "Custom web platforms",
      "Complex project requirements",
    ],

    notes: [
      "This plan is best suited for complex and fully customized projects.",
      "Project scope, features, and architecture are tailored to client requirements.",
    ],

    highlighted: true,
  },
] as const;

export const PRICING_META = {
  support: {
    freeSupportPeriod: "6 months",
    description:
      "6 months of free support is provided after project delivery. After that period, clients must subscribe to the Website Management Plan for continued support.",
  },

  deployment: {
    description:
      "Deployment and ongoing maintenance are handled through the Website Management Plan.",
  },

  customization: {
    description:
      "Features from higher plans can be implemented in lower plans with additional cost. Plans mainly define the baseline scope and pricing boundaries.",
  },
} as const;
