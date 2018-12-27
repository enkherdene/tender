const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'company',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        register: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false
    }
)