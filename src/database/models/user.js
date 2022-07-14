const createUser = (sequelize, Datatypes) => {
  const User = sequelize.define('User', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
    },
    displayName: Datatypes.STRING,
    email: Datatypes.STRING,
    password: Datatypes.STRING,
    image: Datatypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'UserId', as: 'BlogPosts'
    });
  }

  return User;
};

module.exports = createUser;
