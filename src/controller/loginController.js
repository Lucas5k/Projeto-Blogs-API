const loginService = require('../service/loginService');
const jwtServices = require('../service/jwtService');

const loginController = {
  create: async (req, res) => {
    const { email, password } = req.body;

    const isValid = await loginService.isValidLogin(email, password);

    if (isValid.message) return res.status(isValid.code).json({ message: isValid.message });

    const token = await loginService.create(email, password);

    res.status(200).json({ token });
  },

  validateToken: (req, _res, next) => {
    const { authorization } = req.headers;

    // const isValidToken = jwtServices.isValidToken(authorization);

    jwtServices.validateToken(authorization);

    return next();
  },
};

module.exports = loginController;
