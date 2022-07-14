const { User } = require('../database/models');
const jwt = require('./jwtService');

const userService = {
  isValidUser: async (displayName, email, password) => {
    const isValid = await User.findOne({ where: { email } });
    if (displayName.length < 8) {
      return { code: 400, message: '"displayName" length must be at least 8 characters long' };
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return { code: 400, message: '"email" must be a valid email' }; 
    }
    if (password.length < 6) {
      return { code: 400, message: '"password" length must be at least 6 characters long' };
    }
    console.log(email);
    console.log('estou aqui', isValid);
    if (isValid) return { code: 409, message: 'User already registered' };

    return true;
  },

  createUser: async (displayName, email, password, image) => {
    const createUser = await User.create({ displayName, email, password, image });

    const token = jwt.createToken(createUser);

    return token;
  },
};

module.exports = userService;
