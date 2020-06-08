"use strict";
exports.__esModule = true;
exports.sendFile = void 0;
var fs = require('fs');
function sendFile(urlName, response) {
    var contentType;
    if (urlName.includes('.html'))
        contentType = 'text/html';
    else if (urlName.includes('.css'))
        contentType = 'text/css';
    else if (urlName.includes('.jpg'))
        contentType = 'image/jpg';
    else if (urlName.includes('.png'))
        contentType = 'image/png';
    else if (urlName.includes('.js'))
        contentType = 'application/x-javascript';
    else if (urlName.includes('.xml'))
        contentType = 'text/xml';
    else {
        urlName = "../client/index.html";
        contentType = 'text/html';
    }
    response.writeHead(200, { 'Content-Type': contentType });
    fs.readFile('.' + urlName, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found.');
            response.end();
        }
        else {
            //logger.info('Response = ' + urlName);
            response.end(data);
        }
    });
}
exports.sendFile = sendFile;
