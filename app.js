require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.get('/twitter', (req, res) => {
    res.send("Hello Twitter")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please Login First</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${port}`)
})