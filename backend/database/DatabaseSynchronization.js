const database = require('./database.js')
const Patient = require ('../api/Model/Patient.js')

module.exports = async function SynchronizeDatabase() {
    try {
        const response = await database.sync();
    } catch (error) {
        console.log("Error in Database Synchronization |:",error);
    }
}