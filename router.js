const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    // res.render('index')
    res.render('presentation-module')
})

router.post('/initialize-game', (req, res) => {
    const gameFilePath = path.join(__dirname, 'game', 'export/game-bundled.js')

    res.sendFile(gameFilePath, (err) => {
        if (err) {
            res.status(500).send('Error loading script.')
        }
    })
})

router.get("/product", (req, res) => {
    res.render('presentation-module')
})


module.exports = router