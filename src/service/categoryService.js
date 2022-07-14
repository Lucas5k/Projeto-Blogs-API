const { Category } = require('../database/models');

const categoryService = {
  listCategory: async () => {
    const listCategories = await Category.findAll();

    return listCategories;
  },
};

module.exports = categoryService;
