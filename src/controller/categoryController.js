const categoryService = require('../service/categoryService');

const categoryController = {
  listCategory: async (_req, res) => {
    const listCategories = await categoryService.listCategory();

    res.status(200).json(listCategories);
  },

  createCategory: async (req, res) => {
    const { name } = req.body;

    const isValid = categoryService.isValidName(name);

    if (isValid.message) return res.status(isValid.code).json({ message: isValid.message });

    const createCategories = await categoryService.createCategory(name);

    res.status(201).json(createCategories);
  },
};

module.exports = categoryController;