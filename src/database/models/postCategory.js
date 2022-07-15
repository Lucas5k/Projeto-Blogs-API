const createPostCategory = (sequelize, DateTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      type: DateTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      type: DateTypes.INTEGER,
    },
    // createdAt: {
    //   type: 'TIMESTAMP',
    //   defaultValue: sequelize.literal('current_timestamp()'),
    // },
    // updatedAt: {
    //   type: 'TIMESTAMP',
    //   defaultValue: sequelize.literal('current_timestamp()'),
    // }
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};

module.exports = createPostCategory;
