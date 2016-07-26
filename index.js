var ecstatic = require('ecstatic');
var http = require('http');
var path = require('path');
var url = require('url');

module.exports = function (gemini, opts) {

    opts = opts || {};
    var server;
    var rootUrl = url.parse(opts.url || 'http://127.0.0.1:8080');
    opts.root = (path.resolve(process.cwd()), opts.root || '.');

    gemini.on('startRunner', function () {
        return new Promise(function (resolve, reject) {
            console.log('Starting ecstatic.');
            server = http.createServer(ecstatic(opts));
            server.listen(rootUrl.port, rootUrl.hostname, function (argument) {
                console.log('Started ecstatic.');
                resolve();
            });
        });
    });

    gemini.on('endRunner', function (runner, data) {
        return new Promise(function (resolve) {
            // If there was an error in gemini, the server wouldn't
            // start but `endRunner` is still called
            if (!server) {
                resolve();
                return;
            }
            console.log('Stopping ecstatic.');
            server.close(function () {
                console.log('Stopped ecstatic.');
                resolve();
            });
        });
    });

};
