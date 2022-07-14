const loginService = require('../service/loginService');

const loginController = {
  create: async (req, res) => {
    const { email, password } = req.body;

    const isValid = await loginService.isValidLogin(email, password);

    if (isValid.message) return res.status(isValid.code).json({ message: isValid.message });

    const token = await loginService.create({ email, password });

    res.status(200).json({ token });
  },
};

module.exports = loginController;
