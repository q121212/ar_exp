const express = require('express');
const router = express.Router();
const path = require('path');
const funcs = require('../funcs');

const DEBUG = false;

funcs.Logger(router, DEBUG);

router.get('/', function (req, res, next) {
    res.send('respond for index');
});

router.get('/about', function (req, res, next) {
    res.send('Response for About');
});

router.get('/ar', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../assets/ar3.html'));

});

module.exports = router;