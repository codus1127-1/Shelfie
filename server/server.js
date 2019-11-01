require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controllers/controller')

const app = express()

app.use(express.json())

app.get('/api/products', ctrl.getProducts)
app.get('/api/products/:id', ctrl.getOne)
app.post('/api/products', ctrl.addProduct)
app.delete('/api/products/:id', ctrl.deleteProduct)
app.put('/api/products/:id', ctrl.update)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} elves dancing in the attic`))
})