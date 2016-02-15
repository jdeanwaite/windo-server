// ---------------------------------------------------------------------------//
// API ROUTER
// ---------------------------------------------------------------------------//
// The API router sets up all the endpoints for the API. The endpoints are
// creeated in this file, while the implementations of such endpoints will be
// found under routes/app/*.js.
//
// For good information on how to design the endpoints or the API as a whole,
// refer to: read up on http://www.restapitutorial.com/lessons/httpmethods.html
//
// Testing can be done using Postman: https://www.getpostman.com
// ---------------------------------------------------------------------------//
// Dependencies
var express           = require('express');
var meetups           = require('./api/meetups');
var path              = require('path');
var router            = express.Router();
var users             = require('./api/users');

module.exports = function(app) {

// ---------------------------------------------------------------------------//
// User Endpoints
// ---------------------------------------------------------------------------//
  router.get   ('/users/'   , users.getAll);
  router.post  ('/users/'   , users.insert);
  router.put   ('/users/:id', users.update);
  router.delete('/users/:id', users.remove);

// ---------------------------------------------------------------------------//
// Meet-up Endpoints
// ---------------------------------------------------------------------------//
  router.get   ('/meetups/'   , meetups.getAll);
  router.post  ('/meetups/'   , meetups.create);
  router.put   ('/meetups/:id', meetups.update);
  router.delete('/meetups/:id', meetups.delete);

// The result of this module will be the router.
  return router;
};
