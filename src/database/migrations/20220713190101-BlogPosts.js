'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      published: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false,
      },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('current_timestamp()')
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('current_timestamp()')
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id'
          },
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');  
  }
};
