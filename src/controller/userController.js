const userService = require('../service/userService');

const userController = {
  createUser: async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const isValid = await userService.isValidUser(displayName, email, password);

    if (isValid.message) return res.status(isValid.code).json({ message: isValid.message });

    const token = await userService.createUser(displayName, email, password, image);

    res.status(201).json({ token });
  },
};

module.exports = userController;
