var express = require('express')
var router = express.Router()

//Controller
const homeController = require('../controllers/Home')

router.use((req, res, next) => {
    console.log(router.params.id)
    next()
})

router.get('/', homeController.index)

router.get('/logout', (req, res) => {
    router.params.id = undefined,
    res.redirect('/')
})

module.exports = router