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

<<<<<<< HEAD
  router.get('/*', function(req, res) {
=======
  router.get('/confirm/:token', function(req, res) {
    console.log(req.params.token);
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport();
    transporter.sendMail({
        from: '',
        to: '',
        subject: 'hello',
        text: 'hello world!'
    }, function(result) {
      console.log(result);
      res.send('jo');
    });
  });

  router.get('/*', function(req, res) {
    console.log('here');
>>>>>>> f8567f93ea7a1a54359b148f5b0ac6d1d62a391b
    res.set( { 'content-type': 'text/html; charset=utf-8' } )
       .sendFile(path.join(__dirname, '..', 'public/app/index.html'));
  });

// The result of this module will be the router.
  return router;
};
