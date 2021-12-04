const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Events extends Model {

}

Events.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        event_name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        event_month: {
            type: Datatypes.STRING,
            allowNull: false
        },
        event_day: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        event_year: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        event_location: {
            type: Datatypes.STRING,
            allowNull: false
        },
        event_bands: {
            reference: {
                model: 'Band',
                key: 'id'
            }
        },
        event_genres: {
            references: {
                model: 'genre',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Events'
    }
)

module.exports = Events;