const db = require('../database/models');
const jwtCreate = require('./jwtService');

const loginService = {
  isValidLogin: async (email, password) => {
    const isValid = await db.User.findOne({ where: { email } });
    console.log('login', isValid);
    if (!email || !password) {
      return { code: 400, message: 'Some required fields are missing' };
    }
    if (!isValid || isValid.password !== password) {
      return { code: 400, message: 'Invalid fields' };
    }

    return true;
  },

  create: async (email, password) => {
    const createUser = await db.User.create({ email, password });
    
    const token = jwtCreate.createToken(createUser);
    return token;
  }, 
};

module.exports = loginService;
