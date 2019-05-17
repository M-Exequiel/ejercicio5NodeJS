var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var url = require('url');
var express = require('express');
var app = express();

app.listen(8080);
app.get('/', function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200);
        res.write(data);
        res.end();
    });
});

app.get('/trends', function (req, res) {
    fs.readFile('trends.html', function (err, data) {
        var queryData = url.parse(req.url, true).query;
        console.log(queryData);
        res.writeHead(200);
        res.write(data);
        res.end();
    });
});

