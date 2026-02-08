export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQS: FAQItem[] = [
  {
    id: "what-is-ai-agent",
    question: "What is an AI Agent?",
    answer:
      "An AI Agent is an intelligent system designed to understand context, make decisions, and perform tasks autonomously or with minimal human input.",
  },
  {
    id: "how-skyagent-works",
    question: "How does SkyAgent work?",
    answer:
      "SkyAgent works by analyzing your requirements, leveraging advanced AI algorithms to understand context, and executing tasks based on your instructions. It integrates with your workflow, learns from feedback, and continuously improves.",
  },
  {
    id: "data-security",
    question: "How secure is my data?",
    answer:
      "Your data is protected using industry-standard encryption, secure infrastructure, and strict access controls to ensure confidentiality and integrity.",
  },
  {
    id: "integrations",
    question: "Can I integrate my existing tools?",
    answer:
      "Yes, SkyAgent integrates seamlessly with popular tools and platforms, allowing you to enhance your existing workflows without disruption.",
  },
  {
    id: "free-trial",
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a free trial so you can explore SkyAgent’s capabilities before committing to a paid plan.",
  },
  {
    id: "save-time",
    question: "How does SkyAgent save me time?",
    answer:
      "By automating repetitive tasks, streamlining workflows, and providing intelligent insights, SkyAgent helps you focus on high-impact work.",
  },
];
