export interface Term {
  title: string;
  description: string;
}

export interface Rule {
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
      "By accessing Creator's World and purchasing our services, you agree to comply with these Terms and Conditions.",
  },
  {
    title: "2. Services Offered",
    description:
      "Creator's World provides services including website development, website management, logo design, Discord bot development, and related digital solutions. Each service may have separate pricing and package structures.",
  },
  {
    title: "3. Consultation Policy",
    description:
      "We provide two free consultation sessions of up to one hour each. These sessions are limited to project discussion and planning only.",
  },
  {
    title: "4. Payments and Invoicing",
    description:
      "Payments must be made online as agreed before project execution. Two invoices may be issued—one for partial payment and one for final payment. Once an invoice is issued, additional work outside the selected package will not be included unless separately agreed.",
  },
  {
    title: "5. Refund Policy",
    description:
      "Refunds are subject to specific conditions. The base fare is non-refundable. If 50% of the total payment has been made and cancellation is requested after project completion (between 1–5 days before the deadline), only 25% of the paid amount may be refunded. Clients must inform us within 5 days from receiving their unique PNR number. No service qualifies for a 100% refund.",
  },
  {
    title: "6. Service Packages",
    description:
      "Website development is a one-time payment service. Website management is offered separately under a monthly subscription model. Logo design is charged separately unless explicitly included in a selected package.",
  },
  {
    title: "7. Support and Maintenance",
    description:
      "We provide 6 months of free support starting from the date the invoice is sent. Free support covers minor fixes only. After the support period ends, services are available under a paid management plan or per-issue support package.",
  },
  {
    title: "8. Bug Resolution After Delivery",
    description:
      "If issues are discovered after project delivery and the free support period has expired, clients may request fixes under a separate paid service unless subscribed to an active management package.",
  },
  {
    title: "9. Third-Party Services",
    description:
      "We may use third-party platforms such as Discord, Supabase, GitHub, hosting providers, and payment gateways. We are not responsible for their uptime, policies, or service interruptions.",
  },
  {
    title: "10. Liability Disclaimer",
    description:
      "Creator's World shall not be held liable for indirect losses, third-party failures, or misuse of delivered services.",
  },
  {
    title: "11. Changes to Terms",
    description:
      "These Terms may be updated periodically. Continued use of our services constitutes acceptance of any revised Terms.",
  },
  {
    title: "12. Contact Us",
    description:
      "For questions regarding these Terms, please contact us via https://creatorsworld.vercel.app/contact or through our official Discord server.",
  },
];

export const rules: Rule[] = [
  {
    title: "1. Respect All Members",
    description:
      "Treat all members with respect. Harassment, hate speech, discrimination, or abusive behavior will not be tolerated.",
  },
  {
    title: "2. No Spam or Self-Promotion",
    description:
      "Do not spam messages, links, or promote unrelated services without permission from moderators.",
  },
  {
    title: "3. Appropriate Content Only",
    description:
      "All shared content must be safe, legal, and appropriate for a diverse community. NSFW or harmful content is strictly prohibited.",
  },
  {
    title: "4. Follow Discord Guidelines",
    description:
      "All members must follow Discord's official Terms of Service and Community Guidelines.",
  },
  {
    title: "5. No Impersonation",
    description:
      "Impersonating staff members, developers, or other users is strictly prohibited.",
  },
  {
    title: "6. Respect Moderation Decisions",
    description:
      "Moderators have the authority to remove content or restrict users to maintain community safety.",
  },
  {
    title: "7. Protect Privacy",
    description:
      "Do not share personal information of yourself or others without consent.",
  },
  {
    title: "8. Safe Environment for Minors",
    description:
      "Creator's World maintains a safe and moderated environment suitable for minors.",
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
      "We collect only the minimum information necessary for authentication and service delivery, including Discord account details where applicable.",
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
