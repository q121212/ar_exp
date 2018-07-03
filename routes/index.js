const express = require('express');
const router = express.Router();
const path = require('path');
const funcs = require('../funcs');
// const html = require('html');
const wgql = require('../wgql');

var mongo = require('mongodb');
var url = "mongodb://localhost:27017/";
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";



const DEBUG = false;

funcs.Logger(router, DEBUG);

router.get('/', function (req, res, next) {
    res.send('respond for index');
});

router.get('/about', function (req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("myTestDb");
        var query = { name: {$ne: ''} };
        dbo.collection("users").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        //   res.send('Response for About');
          res.json(result);
        });
      });
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

router.get('/fun', function (req,res, next) {
    res.sendFile(path.join(__dirname + '/../assets/fun.html'));
});


router.get('/algs', function (req,res, next) {
    res.sendFile(path.join(__dirname + '/../assets/algs.html'));
});

router.get('/wgql', function (req,res, next) {
    console.log(wgql.result);
});


router.get('/mvp', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../assets/main_page.html'));

});

module.exports = router;
