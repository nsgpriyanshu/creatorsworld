export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQS: FAQItem[] = [
  {
    id: "refund-policy",
    question: "Is the amount refundable?",
    answer:
      "Yes, refunds are available under specific conditions. The base fare is non-refundable. If you have paid 50% of the total amount and request cancellation after completion of all work—between 1 to 5 days before the deadline—only 25% of the paid amount will be refunded. You must inform us within 5 days from the date you receive your unique PNR number. Please note, there is no 100% refund policy.",
  },
  {
    id: "free-consultation",
    question: "Is the first consultation free?",
    answer:
      "Yes, we provide two free consultations, each lasting up to 1 hour. These sessions are meant to understand your requirements and guide you on the best possible solution.",
  },
  {
    id: "logo-design-separate",
    question: "Is logo design included with web development?",
    answer:
      "No, logo design is a separate service and is charged independently from web development. You can choose to purchase it as an add-on if needed.",
  },
  {
    id: "development-vs-management",
    question:
      "Do web development and website management come under the same package?",
    answer:
      "No, they are offered as separate packages. Web development is a one-time payment service, while website management is a monthly subscription-based service.",
  },
  {
    id: "free-support",
    question: "Do you provide free support after project completion?",
    answer:
      "Yes, we provide 6 months of free support starting from the day the payment invoice is sent. Two invoices are issued—one for partial payment and one for final payment. Once the final invoice is sent, no additional work outside the purchased plan will be included.",
  },
  {
    id: "bug-after-completion",
    question: "What if I find a bug after my website is completed?",
    answer:
      "If your free support period has ended and you do not have our website management package, you can still contact us. We offer per-issue support services under a separate paid package.",
  },

  /* -------- Additional FAQs (Random but Relevant) -------- */

  {
    id: "project-timeline",
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity and scope of the project. A basic website usually takes 7–14 days, while larger or custom projects may take several weeks.",
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer:
      "We accept online payments via UPI, bank transfer, and other supported digital payment methods. All payments are invoiced for transparency.",
  },
  {
    id: "content-provided",
    question: "Do you provide website content and images?",
    answer:
      "Basic placeholder content can be provided if needed. However, final content such as text, images, and branding materials should ideally be provided by the client unless content creation is included in your package.",
  },
  {
    id: "ownership-rights",
    question: "Will I own my website after completion?",
    answer:
      "Yes, once the final payment is completed, full ownership of the website, including source code and assets (excluding third-party tools or licenses), is transferred to you.",
  },
  {
    id: "future-changes",
    question: "Can I request changes after the project is delivered?",
    answer:
      "Minor changes are covered during the free support period. Any major changes or new features will be quoted separately.",
  },
  {
    id: "hosting-domain",
    question: "Do you provide domain and hosting services?",
    answer:
      "We can help you set up domain and hosting services, but the cost of domain and hosting is not included unless explicitly mentioned in your package.",
  },
];
