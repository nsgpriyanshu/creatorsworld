// constants/what-you-get.ts

import { Palette, Code2, Gauge, LifeBuoy } from "lucide-react";

export const WHAT_YOU_GET = [
  {
    title: "Design",
    description:
      "Modern, conversion-focused UI that reflects your brand and elevates trust.",
    icon: Palette,
    points: [
      "Custom UI/UX design system",
      "Responsive across devices",
      "Accessible layouts & typography",
    ],
  },
  {
    title: "Development",
    description:
      "Scalable, maintainable code built for speed, security, and growth.",
    icon: Code2,
    points: [
      "Modern tech stack",
      "Clean architecture",
      "Production-ready codebase",
    ],
  },
  {
    title: "Performance",
    description: "Fast, optimized sites tuned for Core Web Vitals and SEO.",
    icon: Gauge,
    points: [
      "Core Web Vitals optimization",
      "SEO-friendly structure",
      "Asset & bundle optimization",
    ],
  },
  {
    title: "Management",
    description:
      "Reliable post-launch care so your site stays secure, fast, and up to date.",
    icon: LifeBuoy,
    points: [
      "Ongoing maintenance",
      "Security & uptime monitoring",
      "Content updates on request",
    ],
  },
] as const;
