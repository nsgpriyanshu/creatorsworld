export interface ShowcaseItem {
  name: string;
  url: string;
  image: string;
  category?: string;
}

export const SHOWCASE: ShowcaseItem[] = [
  {
    name: "Personal Portfolio",
    url: "https://nsgpriyanshu.vercel.app",
    image: "/showcase/portfolio.png",
    category: "Portfolio & Personal Brand",
  },
  {
    name: "Pulse Analytics Platform",
    url: "https://creatorsworld.vercel.app",
    image: "/showcase/saas-platform.svg",
    category: "SaaS & Global Telemetry",
  },
  {
    name: "Vertex Creative Studio",
    url: "https://creatorsworld.vercel.app",
    image: "/showcase/apex-studio.svg",
    category: "Agency & Design Systems",
  },
  {
    name: "Nexus Headless Commerce",
    url: "https://creatorsworld.vercel.app",
    image: "/showcase/nexus-commerce.svg",
    category: "E-Commerce & High Conversion",
  },
];
