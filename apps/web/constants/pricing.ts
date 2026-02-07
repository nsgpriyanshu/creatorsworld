export const PRICING_PLANS = [
  {
    id: "base",
    name: "Base",
    price: "₹9,999",
    duration: "one-time",
    description: "Perfect for individuals & small teams getting started.",
    features: [
      "Core service setup",
      "Basic customization",
      "Email support",
      "Standard delivery timeline",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "enterprise",
    name: "Enterprise Solution",
    price: "Custom",
    duration: "tailored",
    description: "Built for businesses that need scalability and full control.",
    features: [
      "Custom architecture & planning",
      "Advanced integrations",
      "Priority support",
      "Dedicated consultation",
      "Scalable & future-proof setup",
    ],
    cta: "Contact Sales",
    highlighted: true,
  },
] as const;
