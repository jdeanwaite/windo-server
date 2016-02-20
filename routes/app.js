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

  router.get('/*', function(req, res) {
    res.set( { 'content-type': 'text/html; charset=utf-8' } )
       .sendFile(path.join(__dirname, '..', 'public/app/index.html'));
  });

// The result of this module will be the router.
  return router;
};
