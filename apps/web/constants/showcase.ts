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
];
