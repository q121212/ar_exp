const fs = require('fs');
let writeStreamLog = fs.createWriteStream('logs/log.log', {'flags': 'a'});

var Logger = function requestLogger(router,debug=false){
    // middleware for wrapping router function for logging purpose
    router.use(function (req, res, next) {
        let log_str = `${req.method} ${req.originalUrl} ${Date.now()} ${req.headers['referer']} ${req.headers['cookie']} ${req.headers['user-agent']}`;
        if (debug){
            console.log(log_str);
        }
        writeStreamLog.write(log_str+'\n', 'utf8'); // also possible to use base64 encoding
        next();
    });
};


module.exports = {Logger};