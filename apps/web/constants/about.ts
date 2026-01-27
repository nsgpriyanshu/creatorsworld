export type WhoWeAreItem = {
  title: string;
  description: string;
  icon: "community" | "growth" | "global" | "trust";
};

export const WHO_WE_ARE: readonly WhoWeAreItem[] = [
  {
    title: "Largest Discord App Server",
    description:
      "Over 1,000 active bots and a thriving community make us the largest Discord app server.",
    icon: "community",
  },
  {
    title: "Open Source Powerhouse",
    description:
      "We build and support open-source projects that drive innovation on Discord.",
    icon: "growth",
  },
  {
    title: "Thriving Creator Community",
    description:
      "Creators, developers, and artists unite here to collaborate and grow.",
    icon: "global",
  },
  {
    title: "And more",
    description:
      "Explore more features and opportunities in our vibrant community.",
    icon: "trust",
  },
] as const;
