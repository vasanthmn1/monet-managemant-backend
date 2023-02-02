const express = require('express')
const parser = require('body-parser')
const bodyParser = require('body-parser')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')
const route = require('./routes/personal')
const business = require('./routes/businessroutes')

const { usererrHandel } = require('./middleware/errmiddleware')
const DB = require('./config/Connting')
const port = process.env.PORT
const app = express()
app.use(usererrHandel)
DB()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(usererrHandel)
app.use('/', route)
app.use('/', business)
app.listen(port, () => {
    console.log(`connting ${port}`);
})
