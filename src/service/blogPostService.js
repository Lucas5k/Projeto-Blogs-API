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

  // isValidData: async (title, content, categoryIds) => {
  //   const { rows } = await db.BlogPost.findAndCountAll({
  //     include: { model: db.Category, as: 'categories', where: { id: categoryIds } },
  //   });

  //   if (!title || !content || !categoryIds) {
  //     return { code: 400, message: 'Some required fields are missing' };
  //   }

  //   if (rows.length < 1) {
  //     return { code: 400, message: '"categoryIds" not found' };
  //   }

  //   return true;
  // },

  // createBlog: async (title, content, categoryIds) => {
  //   const createBlogs = await db.BlogPost.bulkCreate([{ title, content, categoryIds }]);

  //   return createBlogs;
  // },

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