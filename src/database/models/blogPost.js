const createBlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('current_timestamp()'),
    },
    updated: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('current_timestamp()'),
    }
  }, {
    timestamps: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'UserId', as: 'Users', 
    });
  };

  return BlogPost;
};

module.exports = createBlogPost;
