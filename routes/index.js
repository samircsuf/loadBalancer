var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JSMpeg Stream Client', url: 'ws://192.168.0.18:8082' });

});

module.exports = router;
