const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Events extends Model {

}

Events.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        event_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_month: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_day: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        event_year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        event_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_bands: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'Band',
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