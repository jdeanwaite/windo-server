// ---------------------------------------------------------------------------//
// WINDO SERVER - app.js
// ---------------------------------------------------------------------------//
// Windo Server is the API server for the Windo App created by team FlashyFlash.
// Windo provides its users with an easy way to organize meetings by choosing
// a time for them to meet based on user availability.
// This file contains the initial MongoDB and Express setup for the Node server.
// ---------------------------------------------------------------------------//
// Dependencies
var bodyParser      = require('body-parser');
var config          = require('./config');
var cookieParser    = require('cookie-parser');
var express         = require('express');
var favicon         = require('serve-favicon');
var logger          = require('morgan');
var mongoose        = require('mongoose');
var passport        = require('passport');
var path            = require('path');
var session         = require('express-session');
var RedisStore      = require('connect-redis')(session);
var app             = express();

// ---------------------------------------------------------------------------//
// Mongo and Express Setup
// ---------------------------------------------------------------------------//
// Connects to the MongoDB server
mongoose.connect("mongodb://localhost/windoServer-dev");

app.config = config;

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));

// Logging and Parsing
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Use for public/static elements
app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Use for passport
// require('./config/passport')(passport); // pass passport for configuration
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({ // For session persistance! If we restart the server the session can still be active.
    host: 'localhost',
    port: 6379
  })
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Use BowerComponents
app.use('/bower_components',  express.static(path.join(__dirname, '..', 'bower_components')));

// ---------------------------------------------------------------------------//
// Route Setup
// ---------------------------------------------------------------------------//
// Sets up the routes to be used in the server.
var apiRoutes   = require('./routes/api.routes'  )(app, passport);
var appRoutes   = require('./routes/app.routes'  )(app, passport);

app.use('/app/'   , appRoutes  );
app.use('/api/v0/', apiRoutes  );

module.exports = app;
