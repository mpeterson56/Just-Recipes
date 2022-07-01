const { Model, DataTypes } = require('sequelize');
const sequelize = ('../config/connection');

class Steps extends Model { }

Steps.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        step: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'steps'
    }
);

module.exports = Steps 