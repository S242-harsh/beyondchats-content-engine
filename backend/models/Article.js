import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: String,
    url: { type: String, unique: true },
    content: String,
    publishedAt: String,

    // PHASE 2 fields
    status: {
      type: String,
      default: "original"
    },
    references: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

export default mongoose.model("Article", articleSchema);
