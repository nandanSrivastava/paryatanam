import { PublicController } from "../../../../be/framework/publicController";
import BlogService from "../../../../be/services/BlogService";

class BlogController extends PublicController {
  constructor() {
    super();
    this.service = new BlogService();
  }
  get(req, res) {
    return this.service.getAllBlogs(req, res);
  }
  post(req, res) {
    return this.service.createBlog(req, res);
  }
}

export default new BlogController().handler;
