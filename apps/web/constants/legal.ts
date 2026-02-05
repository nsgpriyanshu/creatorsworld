export interface Term {
  title: string;
  description: string;
}

export interface Policy {
  title: string;
  description: string;
}

export interface BrandColor {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
}

export interface BrandAsset {
  name: string;
  path: string;
  description: string;
  format: string;
  variants?: string[];
}

export interface Guideline {
  title: string;
  description: string;
}

export const terms: Term[] = [
  {
    title: "1. Acceptance of Terms",
    description:
      "By accessing Creator's World and its Discord server, you agree to these Terms of Service. Staff members must create an account to manage administrative tasks, while users only need a Discord account to participate.",
  },
  {
    title: "2. User-Generated Content",
    description:
      "Users can submit content on the website and Discord. All content is moderated to keep the community safe and welcoming.",
  },
  {
    title: "3. Monetization",
    description:
      "Creator's World may offer paid services such as website building and Discord bot development in the future.",
  },
  {
    title: "4. Data Collection",
    description:
      "We only collect the minimum data necessary for authentication and do not use tracking cookies or collect extra personal information.",
  },
  {
    title: "5. Minors",
    description:
      "Minors are welcome to participate in our Discord server, which is maintained as a safe community space.",
  },
  {
    title: "6. Content Removal and Suspension",
    description:
      "We reserve the right to remove content or suspend users who violate our community guidelines or these Terms.",
  },
  {
    title: "7. Third-Party Services",
    description:
      "We use third-party services like Discord, Supabase, and GitHub. We are not responsible for their content or uptime.",
  },
  {
    title: "8. Liability Disclaimer",
    description:
      "Creator's World is not liable for user-posted content or issues caused by third-party services.",
  },
  {
    title: "9. Changes to Terms",
    description:
      "These Terms may change occasionally. We will notify users through Discord and the website when significant updates occur.",
  },
  {
    title: "10. Contact Us",
    description:
      "If you have questions about these Terms, please reach out via our contact page at https://creatorsworld.vercel.app/contact or contact us on Discord.",
  },
];

export const policies: Policy[] = [
  {
    title: "1. Privacy Policy Updates",
    description:
      "We may update this privacy policy at any time. When we do, we will post the new policy here with the updated date. Please check back regularly to stay informed.",
  },
  {
    title: "2. Information We Collect",
    description:
      "We do not collect any personal information other than your Discord account for accessing the Creator's World server.",
  },
  {
    title: "3. Data Storage",
    description:
      "We use Supabase as our third-party service to securely store necessary user data.",
  },
  {
    title: "4. Cookies and Tracking",
    description:
      "We do not use cookies or any other tracking technologies on our website.",
  },
  {
    title: "5. Data Sharing",
    description: "We do not share your personal data with any third parties.",
  },
  {
    title: "6. Your Rights",
    description:
      "You have the right to access, correct, or delete your personal data stored with us. Contact us if you want to exercise these rights.",
  },
  {
    title: "7. Marketing Communications",
    description: "We do not send marketing or promotional emails.",
  },
  {
    title: "8. Discord Server Data",
    description:
      "Your Discord data is managed by Discord's own privacy policies. We recommend reviewing Discord's Privacy Policy for more details.",
  },
  {
    title: "9. Data Retention",
    description:
      "We retain your data for up to 1 year after account inactivity or deletion, after which it will be permanently removed from our systems.",
  },
  {
    title: "10. Contact Us",
    description:
      "If you have any questions or concerns about your data or this privacy policy, please contact us at https://creatorsworld.vercel.app/contact via Discord.",
  },
];

export const aboutDescription = `Creator's World began as a simple dream of a 13-year-old who wanted to build a big Discord server but had no clear direction. A year later, with a deeper look into the Discord ecosystem, it became evident that while there were many large communities, there was a gap—there wasn't a truly large Discord bot hub. That realization sparked the transformation of a test server into what is now known as Creator's World, with the vision of building the biggest and most organized bot-focused server. After months of searching, collecting, and curating bots, the server grew steadily and eventually became the largest verified bot server in the world, featuring over 1,000 bots and a thriving community. Today, Creator's World has evolved into more than just a server—it is now a company dedicated to creating open-source projects, building modern web applications for clients, and providing a space for innovation, tools, and collaboration for users, developers, and partners around the world.`;

export const brandColors: BrandColor[] = [
  {
    name: "Primary Brand",
    hex: "#f10a0a",
    rgb: "rgb(241, 10, 10)",
    usage: "Main  color",
  },
  {
    name: "Primary",
    hex: "#ffffff",
    rgb: "rgb(255,255,255)",
    usage: "Primary color",
  },
  {
    name: "Secondary",
    hex: "#000000",
    rgb: "rgb(0, 0, 0)",
    usage: "Secondary color",
  },
];

export const brandLogos: BrandAsset[] = [
  {
    name: "Main Logo - Light with Background",
    path: "/assets/brand/logo-main-light-1024x1024.png",
    description: "Main Creator's World logo on light background",
    format: "PNG (1024x1024)",
    variants: ["logo-main-light-1024x1024.png"],
  },
  {
    name: "Main Logo - Dark with Background",
    path: "/assets/brand/logo-main-dark-1024x1024.png",
    description: "Main Creator's World logo on dark background",
    format: "PNG (1024x1024)",
    variants: ["logo-main-dark-1024x1024.png"],
  },
  {
    name: "Logo - Light No Background",
    path: "/assets/brand/logo-light-no-bg-1024x1024.png",
    description: "Transparent logo for light backgrounds",
    format: "PNG (1024x1024)",
    variants: [
      "logo-light-no-bg-1024x1024.png",
      "logo-light-no-bg-1024x1024.svg",
    ],
  },
  {
    name: "Logo - Dark No Background",
    path: "/assets/brand/logo-main-dark-no-bg-1024x1024.png",
    description: "Transparent logo for dark backgrounds",
    format: "PNG (1024x1024)",
    variants: [
      "logo-main-dark-no-bg-1024x1024.png",
      "logo-main-dark-no-bg-1024x1024.svg",
    ],
  },
  {
    name: "Logo - Small (SVG)",
    path: "/assets/brand/logo-no-bg-light-512x512.svg",
    description: "Small SVG logo for light backgrounds",
    format: "SVG (512x512)",
    variants: ["logo-no-bg-light-512x512.svg", "logo-no-bg-dark-512x512.svg"],
  },
];

export const brandGuidelines: Guideline[] = [
  {
    title: "Logo Usage",
    description:
      "Our logo is the cornerstone of our brand identity. Always maintain proper spacing and never distort or modify the logo. Use the version that best fits your background.",
  },
  {
    title: "Color Palette",
    description:
      "Our carefully chosen color palette ensures consistency across all platforms. The primary and secondary colors should be used to maintain brand recognition.",
  },
  {
    title: "Typography",
    description:
      "We use Geist Sans as our primary font family. Maintain consistent font sizing and hierarchy across all applications.",
  },
  {
    title: "Spacing",
    description:
      "Consistent spacing creates visual harmony. Use multiples of 4px (4px, 8px, 12px, 16px, etc.) for all margins and padding.",
  },
  {
    title: "Tone of Voice",
    description:
      "Our communication is professional, approachable, and community-focused. Be clear, honest, and supportive in all interactions.",
  },
  {
    title: "Visual Style",
    description:
      "Modern, clean, and minimalist. We use subtle animations, smooth transitions, and intuitive interactions to create delightful experiences.",
  },
];
