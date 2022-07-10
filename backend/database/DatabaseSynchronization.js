const database = require('./database.js')
const Patient = require ('../api/Patient/Patient.js')
const Address = require('../api/Address/Address.js')

module.exports = async function SynchronizeDatabase() {
    try {
        const response = await database.sync({force: true})
    } catch (error) {
        console.log("Error in Database Synchronization |:",error)
    }
}