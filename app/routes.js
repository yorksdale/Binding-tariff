var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})
require('./routes/prototype-v1.js')(router);

// add your routes here

module.exports = router
