const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredients extends Model {}

Ingredients.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ingredient: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measurement: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredients',
  }
);

module.exports = Ingredients;
