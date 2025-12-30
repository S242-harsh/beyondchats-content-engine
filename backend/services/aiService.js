// This can be OpenAI / Gemini / any LLM
export const rewriteWithAI = async (
  originalContent,
  externalSources
) => {
  console.log("🤖 AI rewriting article...");

  // MOCK AI OUTPUT (safe & acceptable)
  return `
### Improved Article

${originalContent}

### Enhanced Insights
${externalSources.map(s => `- ${s.content}`).join("\n")}

### Conclusion
This article has been improved using external references and AI analysis.
`;
};
