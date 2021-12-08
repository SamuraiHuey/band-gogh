const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Instruments extends Model {

}

Instruments.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        instrument_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'instruments'
    }
)

module.exports = Instruments;