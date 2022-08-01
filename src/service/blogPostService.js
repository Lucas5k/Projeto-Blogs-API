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

  createBlog: async (title, content, categoryIds) => {
    const createBlogs = await db.BlogPost.bulkCreate([{ title, content, categoryIds }]);
    console.log(createBlogs);

    return createBlogs;
  },

  isValidID: async (id) => {
    const findID = await db.BlogPost.findByPk(id);

    if (!findID) return { code: 404, message: 'Post does not exist' };

    return true;
  },

  listBlogId: async (id) => {
    const findID = await db.BlogPost.findByPk(id, { 
      attributes: { exclude: ['UserId', 'createdAt', 'updateAt'] },
      include: [
        { model: 
          db.User, 
          as: 'user',
          attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
        },
        { 
          model: 
          db.Category, 
          as: 'categories', 
          through: { attributes: [] }, 
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        }, 
      ],
    });
 
    return findID;
  },
};

module.exports = blogPostService;