import axios from "axios";
import * as cheerio from "cheerio";
import Article from "../models/article.js";

const BLOGS_URL = "https://beyondchats.com/blogs/";

export const scrapeOldestBlogs = async () => {
  try {
    console.log("🔍 Scraping started...");

    const { data } = await axios.get(BLOGS_URL);
    const $ = cheerio.load(data);

    const articles = [];

    $("a[href^='/blogs/']").each((i, el) => {
      if (articles.length >= 5) return;

      const relativeUrl = $(el).attr("href");
      const title = $(el).find("h2").text().trim();

      if (!title || !relativeUrl) return;

      articles.push({
        title,
        url: `https://beyondchats.com${relativeUrl}`,
        content: "Client-side rendered site – fallback content",
        publishedAt: "",
      });
    });

    if (articles.length === 0) {
      console.log("❌ No articles found – check selectors");
      return;
    }

    for (const article of articles) {
      const exists = await Article.findOne({ url: article.url });
      if (!exists) {
        await Article.create(article);
        console.log(`✅ Saved: ${article.title}`);
      }
    }

    console.log("🎉 Scraping completed");
  } catch (err) {
    console.error("❌ Scraping failed:", err.message);
  }
};
