require('dotenv').config()

const express = require('express')
const consign = require('consign')
const app = express()
const port = process.env.API_PORT

const SynchronizeDatabase = require('./database/DatabaseSynchronization')

consign()
    .then('/config/middlewares.js')
    .then('routes.js')
    .into(app)
SynchronizeDatabase()

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})