const categoryService = require('../service/categoryService');

const categoryController = {
  listCategory: async (_req, res) => {
    const listCategories = await categoryService.listCategory();

    res.status(200).json(listCategories);
  },
};

module.exports = categoryController;