var express = require('express');
var path = require('path');

var router = express.Router();

module.exports = function(app) {
  /* GET login */
  router.get('/login', function(req, res) {
    // Login page
    console.log('rendering login page.')
    res.render('login');
  });

  /* GET app root. */
  router.get('/', function(req, res) {
    // Login page if not logged in, dashboard if logged in.
    console.log('rendering dashboard.');
    res.render('dashboard');
  });

  return router;
};
