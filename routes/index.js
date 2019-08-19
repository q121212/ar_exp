'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const funcs = require('../funcs');
// const html = require('html');
const wgql = require('../wgql');
const enp = require("easy-no-password")("use.aryx.me_my_LONG_passwd");


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

router.get('/ar1', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../assets/1/index.html'));

});
router.get('/ar7', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../assets/index.html'));

});


router.get('/vr', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../assets/scene1_full.html'));
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


router.get('/useapi/insertData', function (req, res, next) {
    // Generating a token for easy-no-password
    var userId = req.query.uid;
    console.log(userId);
    enp.createToken(userId, (err, token) => {
        if (err) return console.error(err);
        // Send token to the user, using email, SMS, etc.
        console.log([userId, token]);
    });


    MongoClient.connect(url,function(err, db){
        if(err) throw err;
        var dbo = db.db("unse");
        var result = dbo.collection('Users').insertOne({
            // 'uid': 1,
            // 'uname': 'max',
            params: req.query
        }).then((result)=>{res.json([result, result.insertedId, req.query])});
        // res.json(result);
    });
});


router.get('/useapi/getUsers', function (req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("unse");
        var query = { name: {$ne: ''} };
        dbo.collection("Users").find(query).toArray(function(err, result) {
          if (err) throw err;
        //   console.log(result);
          db.close();
        //   res.send('Response for About');
          res.json(result);
        });
      });
});

router.get('/useapi/getUserById', function (req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("unse");
        // console.log(req.query);
        var query = { uid: {$eq: req.query.uid } };
        dbo.collection("Users").find(query).toArray(function(err, result) {
          if (err) throw err;
        //   console.log(result);
          db.close();
        //   res.send('Response for About');
          res.json(result);
        });
      });
});


module.exports = router;
