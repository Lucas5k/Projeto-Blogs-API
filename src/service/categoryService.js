const { Category } = require('../database/models');

const categoryService = {
  listCategory: async () => {
    const listCategories = await Category.findAll();

    return listCategories;
  },

  isValidName: (name) => {
    if (!name) return { code: 400, message: '"name" is required' };
    
    return true;
  },

  createCategory: async (name) => {
    const createCategories = await Category.create({ name });

    return createCategories;
  },
};

module.exports = categoryService;
