var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond for index');
});

router.get('/about', function (req,res, next) {
    res.send('Response for About');
})
module.exports = router;