const express = require('express')
const dotenv = require("dotenv").config()
const app = express()

const router = require('./router')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

app.all('*', (req, res) => {
    res.render('404')
})


app.listen(process.env.PORT, () => {
    console.log(`sticker app listening on ${process.env.PORT}`)
})