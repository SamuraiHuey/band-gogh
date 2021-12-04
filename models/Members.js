const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Members extends Model {

}

Members.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        members_name: {
            type: Datatypes.STRING,
            allowNull: false
        },

        event_genres: {
            references: {
                model: 'Instrument',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Members'
    }
)

module.exports = Members;