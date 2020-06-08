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
var http = require("http");
//const https = require('https');
var fs = require("fs"), url = require("url"), mysql = require("mysql");
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
loadSql();
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
function recordMessage(request, response) {
    var entry = url.parse(request.url, true).query;
    var xmlFile = fs.readFileSync("./messages/" + entry.form + "/index.xml", "utf8");
    if (xmlFile.length < 6000) {
        var content = "<topic>" +
            "\r\n" +
            "  <date>" +
            Date() +
            "</date>" +
            "\r\n" +
            "  <category>" +
            entry.form +
            "</category>" +
            "\r\n" +
            "  <message>" +
            entry.message +
            "</message>" +
            "\r\n" +
            "  <author>" +
            entry.uname +
            "</author>" +
            "\r\n" +
            "</topic>";
        var newXmlFile = xmlFile.replace("</topics>", "") + content + "</topics>";
        fs.writeFileSync("./messages/" + entry.form + "/index.xml", newXmlFile);
        xmlFile = fs.readFileSync("./messages/topics.xml", "utf8");
        var x = xmlFile.indexOf(entry.form);
        var y = x;
        while (xmlFile.substring(x, x + 7) !== "<topic>")
            --x;
        while (xmlFile.substring(y, y + 8) !== "</topic>")
            ++y;
        var newXmlTopics = xmlFile.substring(0, x) + content + xmlFile.substring(y + 8);
        fs.writeFileSync("./messages/topics.xml", newXmlTopics);
    }
    sendFile("/messages/" + entry.form + "/index.html", response);
}
function loadSql() {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Mercyair@11",
        database: "bromley",
        insecureAuth: true
    });
    con.connect(function (err) {
        if (err)
            throw err;
        con.query("SELECT * FROM contacts", function (err, result) {
            if (err)
                throw err;
            else
                json = JSON.parse(JSON.stringify(result));
            con.end();
        });
    });
}
function search(searchfield, value) {
    for (var i = 0; i < json.parse.length; i++)
        if (json[i][searchfield] === value)
            return true;
    return false;
}
function install(entry) {
    var sql = "INSERT INTO contacts (fname, lname, email, userName, psw, authorize) VALUES ( '" +
        entry.fname +
        "', '" +
        entry.lname +
        "', '" +
        entry.email +
        "', '" +
        entry.uname +
        "', '" +
        entry.psw +
        "', '0')";
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Mercyair@11",
        database: "bromley",
        insecureAuth: true
    });
    con.connect(function (err) {
        if (err)
            throw err;
        con.query(sql, function (err, result) {
            if (err) {
                console.log("error recording record.");
                throw err;
            }
            else {
                console.log(sql);
                console.log("New user recorded.  Need to verify.");
                con.end();
            }
        });
    });
}
function sendFile(request, response) {
    console.log(request.url);
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
            //logger.info('Response = ' + urlName);
            response.end(data);
        }
    });
}
function forms(request, response) {
    var entry = url.parse(request.url, true).query;
    if (entry.form.includes("newUser"))
        recordMessage(request, response);
    else if (entry.form.includes("login")) {
        loadSql();
        var found = false;
        for (var i = 0; i < json.parse.length; i++) {
            if (json[i].userName === entry.uname && json[i].psw === entry.password) {
                user.userName = entry.uname;
                user.authorize = json[i].authorize;
                if (user.authorize)
                    found = true;
                break;
            }
        }
        if (!found) {
            if (request.headers.host === "www.interactive-physics.org")
                sendFile("/Physics/userNot.html", response);
            else
                sendFile("/userNot.html", response);
            console.log("Unknown user failed login.");
            user.authorize = false;
        }
        else {
            if (request.headers.host === "www.interactive-physics.org")
                sendFile("/logged.html", response);
            else
                sendFile("/logged.html", response);
            console.log("logging in " + entry.uname);
            user.authorize = true;
        }
    }
}
