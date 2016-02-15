// ---------------------------------------------------------------------------//
// APP ROUTER
// ---------------------------------------------------------------------------//
// The APP router sets up all the endpoints for the web app.
// ---------------------------------------------------------------------------//
// Dependencies
var express         = require('express');
var path            = require('path');
var router          = express.Router();

module.exports = function(app) {

// ---------------------------------------------------------------------------//
// Login Endpoint(s)
// ---------------------------------------------------------------------------//
  router.get('/login', function(req, res) {
    // Login page
    console.log('rendering login page.')
    res.render('login');
  });

// ---------------------------------------------------------------------------//
// Dashboard Endpoint(s)
// ---------------------------------------------------------------------------//
  router.get('/', function(req, res) {
    // Login page if not logged in, dashboard if logged in.
    console.log('rendering dashboard.');
    res.render('dashboard');
  });

// The result of this module will be the router.
  return router;
};
