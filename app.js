var express = require('express');
var app = express();

var routes = require('./routes');

app.use(routes);
app.use(express.static('assets')); // for access to files in assets folder: domain:port/file

app.listen(8088, function () {
    console.log('Example app listening on port 8088!');
});

module.exports = app;