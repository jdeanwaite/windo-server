// read up on http://www.restapitutorial.com/lessons/httpmethods.html

var express = require('express');
var meetups = require('./api/meetups');
var path = require('path');

var router = express.Router();

module.exports = function(app) {

  router.get('/', function(req, res) {
    console.log('test');
    res.send('success');
  });

  /* GET meetup list*/
  router.get('/meetups/', meetups.getAll);

  /* POST meetup create */
  router.post('/meetups/', meetups.create);

  /* PUT meetup update */
  // who can update this? Make sure that if they arent the creator that
  // they cant maliciously update the meetup.
  router.put('/meetups/:id', meetups.update);

  /* DELETE meetup delete */
  router.delete('/meetups/:id', function(req, res) {
  });

  return router;
};
