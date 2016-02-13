var express = require('express');
var path = require('path');

var router = express.Router();

module.exports = function(app) {

  /* GET app root. */
  router.get('/', function(req, res) {
    // Login page if not logged in, dashboard if logged in.
    console.log('hi');
    res.send('hey');
  });

  /* GET login */
  router.get('/login', function(req, res) {
    // Login page
  });

  /* GET create */
  router.get('/new', function(req, res) {

  });

  return router;
}
;
