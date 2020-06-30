/*******************************************************************************************************
 *                                             Bromley Solutions
 *                                             Server JavaScript
 *
 *   It will have online example programs for physics topics
 *
 *
 *
 * Date:  11-22-2019
 * Author: Richard Bromley
 *******************************************************************************************************/
"use strict";
const http = require("http");          //https://myaccount.google.com/lesssecureapps?pli=1 set less secure on       
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dickbrmly@gmail.com',
        pass: "Quest@8880"
    }
});

//const https = require('https');
var fs = require("fs"), url = require("url");
/* var options = {
    key: fs.readFileSync('./keys/multisan.key'),
    ca: [fs.readFileSync('./keys/347375790repl_1.ca-bundle')],
    cert: fs.readFileSync('./keys/347375790repl_1.crt'),
    requestCert: false,
    rejectUnaithorized: false
}; */
var user = {
    userName: "John",
    authorize: false
};
var json = JSON, port = process.env.PORT || 3000;
/* http.createServer(function (request, response) {
    response.writeHead(301, { "Location": "https://www.interactive-physics.org/index.html" });
    response.end();
 }).listen(80); */
http
    .createServer(function (request, response) {
    if (request.url.includes("form"))
        forms(request, response);
    else
        sendFile(request, response);
})
    .listen(port);
function sendFile(request, response) {
    var contentType;
    if (request.url.includes('.html') == true) {
        contentType = "text/html";
        request.url = "./client" + request.url;
    }
    else if (request.url.includes(".css")) {
        contentType = "text/css";
        request.url = "./client" + request.url;
    }
    else if (request.url.includes(".jpg")) {
        contentType = "image/jpg";
        request.url = "./" + request.url;
    }
    else if (request.url.includes(".PNG") || request.url.includes(".png")) {
        contentType = "image/PNG";
        request.url = "./" + request.url;
    }
    else if (request.url.includes(".js")) {
        contentType = "application/x-javascript";
        request.url = "./client" + request.url;
    }
    else if (request.url.includes(".xml")) {
        contentType = "text/xml";
        request.url = "./client" + request.url;
    }
    else {
        request.url = "./client/index.html";
        contentType = "text/html";
    }
    response.writeHead(200, { "Content-Type": contentType });
    console.log("Server sent: " + request.url + " " + contentType);
    fs.readFile("." + request.url, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write("File not found.");
            response.end();
        }
        else {
            response.end(data);
        }
    });
}
function forms(request, response) {
    var entry = url.parse(request.url, true).query;
    if (entry.form.includes("newEmail")) {


        var mailOptions = {
            from: 'dickbrmly@gmail.com',
            to: 'admin@bromley-solutions.com',
            subject: 'Information request',
            text: entry.text
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        var contentType = "text/html";
        response.writeHead(200, { "Content-Type": contentType });
        console.log("." + 'client/contact/close.html' + " " + "text/html");

        fs.readFile('../client/close.html', function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write("File not found.");
                response.end();
            }
            else {
                response.end(data);
            }
        });
    }
}
