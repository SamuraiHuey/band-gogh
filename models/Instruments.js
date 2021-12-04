const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Instruments extends Model {

}

Instruments.init(
    {
        id: {
            type: Datatypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        instrument_name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        instrument_players: {
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