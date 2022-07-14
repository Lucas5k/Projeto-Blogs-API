const jwt = require('jsonwebtoken');

const jwtServices = {
  createToken: (USER) => {
    const token = jwt.sign({ USER }, process.env.JWT_SECRET);

    return token;
  },
};

module.exports = jwtServices;
