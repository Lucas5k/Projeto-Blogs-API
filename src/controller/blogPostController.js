const blogPostService = require('../service/blogPostService');

const blogPostController = {
  listBlog: async (_req, res) => {
    const listBlogs = await blogPostService.listBlog();

    return res.status(200).json(listBlogs);
  },
  // createBlog: async (req, res) => {
  //   const { title, content, categoryIds } = req.body;

  //   // const isValid = await blogPostService.isValidData(title, content, categoryIds);

  //   // if (isValid.message) return res.status(isValid.code).json({ message: isValid.message });

  //   const createBlogs = await blogPostService.createBlog(title, content, categoryIds);

  //   res.status(201).json(createBlogs);
  // },

  listBlogId: async (req, res) => {
    const { id } = req.params;

    const isValid = await blogPostService.isValidID(id);

    if (isValid.message) return res.status(isValid.code).json({ message: isValid.message });

    const findID = await blogPostService.listBlogId(id);

    res.status(200).json(findID);
  },
};

module.exports = blogPostController;
