const express = require('express');
const router = express.Router();
const path = require('path');
const funcs = require('../funcs');
// const html = require('html');

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

router.get('/b', function (req, res, next) {
    res.write(JSON.stringify([1,2,3]));
    res.end();

});

router.get('/fifa2018', function (req,res, next) {
    res.sendFile(path.join(__dirname + '/../assets/fifa.html'));
});

router.get('/game', function (req,res, next) {
    res.sendFile(path.join(__dirname + '/../assets/game.html'));
});

module.exports = router;
