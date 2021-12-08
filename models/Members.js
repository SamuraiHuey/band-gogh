const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Members extends Model {

}

Members.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        members_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        member_instrument: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Instruments',
                key: 'id'
            }
        },
        member_band: {
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
        modelName: 'Members'
    }
)

module.exports = Members;