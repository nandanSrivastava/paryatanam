import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    excerpt: {
      type: String,
    },

    content: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String,
    },

    author: {
      type: String,
      default: "Admin",
    },

    tags: [
      {
        type: String,
      },
    ],

    category: {
      type: String,
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    metaTitle: String,
    metaDescription: String,

    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);