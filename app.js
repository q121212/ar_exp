var express = require('express');
var app = express();

var routes = require('./routes');

app.use(routes);
app.use(express.static('assets')); // for access to files in assets folder: domain:port/file

var port = 8080;

app.listen(port, function () {
//    var host = app.address().address;
//    var port = app.address().port;
    console.log(`The app listening on port ${port}!`);
});

module.exports = app;
