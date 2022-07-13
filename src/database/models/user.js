const createUser = (sequelize, Datatypes) => {
  const User = sequelize.define('User', {
    id: Datatypes.INTEGER,
    displayName: Datatypes.STRING,
    email: Datatypes.STRING,
    password: Datatypes.STRING,
    image: Datatypes.STRING,
  });


  return User;
};

module.exports = createUser;
