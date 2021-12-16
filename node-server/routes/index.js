var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('Homepage for the Freshteam API node server');
});

module.exports = router;
