const createBlogPost = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      defaultValue: '1',
    },
    published: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('current_timestamp()'),
    },
    updated: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('current_timestamp()'),
    }
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user', 
    });
  };

  return BlogPosts;
};

module.exports = createBlogPost;
