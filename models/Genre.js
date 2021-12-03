const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Genres extends Model {

}

Genres.init(
    {
        id: {
            type: Datatypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        genre_name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        genre_bands: {
            reference: {
                model: 'Band',
                key: 'id'
            }
        },
        genre_events: {
            references: {
                model: 'events',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'genre'
    }
)

module.exports = Genre;