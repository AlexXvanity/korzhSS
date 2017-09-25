'use strict';

let exec = require('child_process').exec,
    fs = require('fs');

function start(response) {
    console.log("Request handler 'start' was called.");

    exec("ls -lah", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });
}

function getTime (response) {
    let now = new Date(),
        time = `${now.getHours()}:${now.getMinutes()}`;

    console.log('request handler "time" was called');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(time);
    response.end();
}

function getDate (response) {
    let now = new Date(),
        date = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`;

    console.log('request handler "time" was called');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(date);
    response.end();
}

function uploadStatic (pathname, response) {
    console.log('request handler "uploadStatic" was called');

    console.log('??? .' + pathname);
    fs.readFile('.' + pathname, "binary", function (error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            console.log('>>>' + pathname);

            response.writeHead(200, {"Content-Type": 'text/html'});
            response.write(file, "binary");
            response.end();
        }
    });
}

function getIndex (response) {
    console.log('request handler "getIndex" was called');

    fs.readFile("./index.html", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.getTime = getTime;
exports.getDate = getDate;
exports.getIndex = getIndex;
exports.uploadStatic = uploadStatic;