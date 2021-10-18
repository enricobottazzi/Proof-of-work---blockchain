const jayson = require('jayson');

// create a client
const client = jayson.Client.http({
  port: 3000
});

module.exports = client