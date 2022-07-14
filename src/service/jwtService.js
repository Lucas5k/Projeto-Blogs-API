const jwt = require('jsonwebtoken');

const jwtServices = {
  createToken: (USER) => {
    const token = jwt.sign({ USER }, process.env.JWT_SECRET);

    return token;
  },

  // isValidToken: (token) => {
  //   if (!token) return { code: 401, message: 'Token not found' };
  //   // if (token.includes(undefined)) return { code: 401, message: 'Expired or invalid token' };

  //   return token;
  // },

  validateToken: (token) => {
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET);
    
      return data;
    } catch (e) {
      const tokenError = new Error('Token not found');
      tokenError.name = 'UnauthorizedError';

      if (!token) {
        throw tokenError;
      }

      const expiredTokenError = new Error('Expired or invalid token');
      expiredTokenError.name = 'UnauthorizedError';
      throw expiredTokenError;
    }
  },
};

module.exports = jwtServices;
