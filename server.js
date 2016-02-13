#!/usr/bin/env node
var debug = require('debug')('windowServer');
var app = require('./app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

// var auth = require('../routers/auth');
var api = require('./routes/api')(app);
var routes = require('./routes/index')(app);
// var errors = require('../routes/errors');
// var users = require('../routes/users');

app.use('/', routes);
app.use('/api/v0/', api);
// app.use(errors);
