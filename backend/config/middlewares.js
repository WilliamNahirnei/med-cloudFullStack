const bodyParser = require('body-parser')
const cors = require('cors')
const AcceptableExeption = require('../api/CustomExeptions/AccptableExeption')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}