// ---------------------------------------------------------------------------//
// Dependencies
// ---------------------------------------------------------------------------//
var bodyParser      = require('body-parser');
var cookieParser    = require('cookie-parser');
var express         = require('express');
var favicon         = require('serve-favicon');
var logger          = require('morgan');
var mongoose        = require('mongoose');
var path            = require('path');
var app             = express();

// ---------------------------------------------------------------------------//
// App Setup
// ---------------------------------------------------------------------------//
// Connects to the MongoDB server
mongoose.connect("mongodb://localhost/windoServer");

// Jade view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));

// Logging and Parsing
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Setup for static elements
app.use(express.static(path.join(__dirname, 'public')));

// ---------------------------------------------------------------------------//
// Route Setup
// ---------------------------------------------------------------------------//
// Sets up the routes to be used in the server.
var apiRoutes = require('./routes/api')(app);
var appRoutes = require('./routes/app')(app);

app.use('/app/'   , appRoutes);
app.use('/api/v0/', apiRoutes);

module.exports = app;
