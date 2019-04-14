var express = require('express');
var http = require('http');
var socket = require('socket.io');

var app = express();
var server = http.createServer(app);
var listen = socket.listen(server);

server.listen(process.env.PORT || 3000, () => {
    console.log('server is running....');
});

listen.sockets.on('connect', (s) => {
    console.log('client connected');

    s.on('signal', (msg) => {
        console.log('message: ' + msg);
    })
});