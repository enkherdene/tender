const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'tender',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        number: {
            type: Sequelize.INTEGER
        },
        about: {
            type: Sequelize.STRING
        },
        people:{
            type: Sequelize.INTEGER
        }

    },
    {
        timestamps: false
    }
)