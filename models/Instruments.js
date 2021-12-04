const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

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
        },
        instrument_players: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'Band',
                key: ''
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'instruments'
    }
)

module.exports = Instruments;