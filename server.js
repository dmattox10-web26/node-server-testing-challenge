const express = require('express')

const smurfRouter = require('./routes/smurfs')

//const auth = require('./middleware/auth')
const configure = require('./middleware/config')

const server = express()

configure(server)

server.use('/smurfs', smurfRouter)

module.exports = server