export type Product = {
  slug: string;
  title: string;
  highlight?: string;
  description: string;
  price: number;
  image: {
    light: string;
    dark: string;
    alt: string;
  };
  discordLink: string;
};

export const products: Record<string, Product> = {
  "emo-pack": {
    slug: "emo-pack",
    title: "Emo",
    highlight: "Pack",
    description:
      "A premium utility emoji pack crafted for nsCore. Designed to enhance Discord communities with expressive, clean, and modern emojis.",
    price: 899,
    image: {
      light: "/assets/product_one.webp",
      dark: "/assets/product_one.webp",
      alt: "Emo Pack Preview",
    },
    discordLink: "https://discord.gg/your-server",
  },
};
