var express = require('express')
var router = express.Router()

router.get('/',function (req, res) {
    res.send('ini adalah halaman product');
})

module.exports = router