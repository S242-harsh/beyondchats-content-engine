// This simulates Google Search using a safe API / mock
export const searchTopArticles = async (query) => {
  console.log(`🔎 Searching external articles for: ${query}`);

  // MOCK DATA (interview-safe)
  return [
    {
      title: "Understanding AI Chatbots",
      url: "https://example.com/ai-chatbots",
      content: "AI chatbots are transforming businesses by..."
    },
    {
      title: "How AI Improves Customer Support",
      url: "https://example.com/ai-support",
      content: "Customer support automation with AI helps..."
    }
  ];
};
