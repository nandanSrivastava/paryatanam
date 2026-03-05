import { PublicController } from "../../../../be/framework/publicController";
import BlogService from "../../../../be/services/BlogService";

class BlogByIdController extends PublicController {
  constructor() {
    super();
    this.service = new BlogService();
  }

  get(req, res) {
    return this.service.getBlogById(req, res);
  }

  patch(req, res) {
    return this.service.updateBlog(req, res);
  }

  delete(req, res) {
    return this.service.deleteBlog(req, res);
  }
}

export default new BlogByIdController().handler;