import { Service } from "../framework/service";
import dbConnect from "../lib/mongodb";
import Blog from "../models/Blog";

class BlogService extends Service {
  constructor() {
    super();
    dbConnect();
  }

  getId(req) {
    return req?.query?.id || req?.params?.id;
  }

  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/\s+/g, "-");
  }

  // CREATE BLOG
  async createBlog(req, res) {
    try {
      const body = req.body || {};

      if (!body.title || !body.content) {
        return res.status(400).json({
          success: false,
          message: "title and content are required",
        });
      }

      const slug = this.generateSlug(body.title);

      const slugExists = await Blog.findOne({ slug }).lean();

      if (slugExists) {
        return res.status(409).json({
          success: false,
          message: "Blog with same title already exists",
        });
      }

      const blog = await Blog.create({
        ...body,
        slug,
      });

      return res.status(201).json({
        success: true,
        data: blog,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err?.message || "Server error",
      });
    }
  }

  // GET ALL BLOGS
  async getAllBlogs(req, res) {
    try {
      const blogs = await Blog.find({})
        .sort({ createdAt: -1 })
        .lean();

      return res.status(200).json({
        success: true,
        data: blogs,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err?.message || "Server error",
      });
    }
  }

  // GET BLOG BY ID
  async getBlogById(req, res) {
    try {
      const id = this.getId(req);

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "id is required",
        });
      }

      const blog = await Blog.findById(id).lean();

      if (!blog) {
        return res.status(404).json({
          success: false,
          message: "Blog not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: blog,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err?.message || "Server error",
      });
    }
  }

  // UPDATE BLOG
  async updateBlog(req, res) {
    try {
      const id = this.getId(req);
      const updates = req.body || {};

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "id is required",
        });
      }

      if (updates.title) {
        updates.slug = this.generateSlug(updates.title);
      }

      const blog = await Blog.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
      }).lean();

      if (!blog) {
        return res.status(404).json({
          success: false,
          message: "Blog not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: blog,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err?.message || "Server error",
      });
    }
  }

  // DELETE BLOG
  async deleteBlog(req, res) {
    try {
      const id = this.getId(req);

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "id is required",
        });
      }

      const blog = await Blog.findByIdAndDelete(id);

      if (!blog) {
        return res.status(404).json({
          success: false,
          message: "Blog not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Blog deleted successfully",
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err?.message || "Server error",
      });
    }
  }
}

export default BlogService;