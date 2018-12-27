const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'price',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tender_id: {
            type: Sequelize.INTEGER
        },
        company_id: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
)