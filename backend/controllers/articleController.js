import Article from "../models/article.js";

// GET all articles
export const getArticles = async (req, res) => {
  const articles = await Article.find().sort({ createdAt: -1 });
  res.json(articles);
};

// CREATE article
export const createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PHASE 2: PROCESS article
export const processArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // 🔧 Fake AI processing (assignment-friendly)
    article.content = article.content + "\n\n[AI Optimized Content]";
    article.references = [
      "https://example.com/reference-1",
      "https://example.com/reference-2"
    ];
    article.status = "processed";

    await article.save();

    res.json({
      message: "Article processed successfully",
      article
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
