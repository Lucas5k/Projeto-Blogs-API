const createCategory = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  });

  return Categorie;
};

module.exports = createCategory;
