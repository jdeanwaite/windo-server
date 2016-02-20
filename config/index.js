var fs = require('fs');
var path = require('path');
var smtpConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'smtp.secret'), 'utf8'));

module.exports = {
  smtpConfig: smtpConfig
};
