import express from "express";
import {
  getArticles,
  createArticle,
  processArticle
} from "../controllers/articleController.js";

const router = express.Router();

router.get("/", getArticles);
router.post("/", createArticle);

// 🔥 PHASE 2
router.post("/process/:id", processArticle);

export default router;
