require("dotenv").config()

require("./db")

const express = require("express")
//const cors = require('cors')

const app = express()
// app.use(cors({
//     origin: 'http://localhost:5005/api'
// }
// ))


require("./config")(app)

require('./routes')(app)

require("./error-handling")(app)

module.exports = app
