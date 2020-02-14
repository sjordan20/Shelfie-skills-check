require('dotenv').config()
const express = require('express')
const massive = require('massive')

const ctrl = require('./controller/controller')

const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('||-------db is ready to party----||')
})
    .catch(err => console.log(err))

app.use(express.json())



app.listen(SERVER_PORT, () => {
    console.log(`||----I am here ${SERVER_PORT}-----||`)
})