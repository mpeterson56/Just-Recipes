const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Steps extends Model {}

Steps.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        step_text: {
            type: DataTypes.STRING,
            allowNull: true
        },
     
          post_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'post',
              key: 'id'
            },
          },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'step'
    }
);

module.exports = Steps; 