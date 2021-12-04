const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Genres extends Model {

}

Genres.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        genre_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre_bands: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'Band',
                key: 'id'
            }
        },
        genre_events: {
            type: DataTypes.INTEGER,
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

module.exports = Genres;