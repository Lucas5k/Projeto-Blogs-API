const blogPostService = require('../service/blogPostService');

const blogPostController = {
  listBlog: async (_req, res) => {
    const listBlogs = await blogPostService.listBlog();

    return res.status(200).json(listBlogs);
  },
};

module.exports = blogPostController;
