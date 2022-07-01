const { Model, DataTypes } = require('sequelize');
const sequelize = ('../config/connection');

class Ingredients extends Model { }

Ingredients.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ingredient: {
            type: DataTypes.STRING,
            allowNull: false
        },
        measurement: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'ingredients'
    }
);

module.exports = Ingredients