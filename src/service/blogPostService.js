const db = require('../database/models');

const blogPostService = {
  listBlog: async () => {
    const listBlogs = await db.BlogPost
    .findAll({ 
      attributes: { exclude: ['createdAt', 'updatedAt', 'UserId'] },
      include: [
        { model: 
          db.User, 
          as: 'user', 
          attributes: { exclude: ['createdAt', 'updatedAt', 'password'] } },
        { model: 
          db.Category, 
          as: 'categories', 
          through: { attributes: [] }, 
          attributes: { exclude: ['createdAt', 'updatedAt'] } }, 
      ],
    });

    return listBlogs;
  },
};

module.exports = blogPostService;