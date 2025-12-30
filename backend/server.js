import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import articleRoutes from "./routes/articleRoutes.js";
import { scrapeOldestBlogs } from "./scrapers/scrapeBlogs.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/articles", articleRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    scrapeOldestBlogs(); // call scraper ONCE
  })
  .catch((err) => console.log("❌ MongoDB error:", err.message));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
