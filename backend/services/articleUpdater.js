import Article from "../models/article.js";
import { searchTopArticles } from "./searchService.js";
import { rewriteWithAI } from "./aiService.js";

export const processArticleById = async (articleId) => {
  const article = await Article.findById(articleId);

  if (!article) {
    throw new Error("Article not found");
  }

  if (article.status === "processed") {
    return { message: "Article already processed" };
  }

  // 🔎 Search external articles
  const externalArticles = await searchTopArticles(article.title);

  // 🤖 AI rewrite
  const improvedContent = await rewriteWithAI(
    article.content,
    externalArticles
  );

  // Update article
  article.content = improvedContent;
  article.status = "processed";
  article.references = externalArticles.map((a) => a.url);

  await article.save();

  return {
    message: "Article processed successfully",
    article,
  };
};
