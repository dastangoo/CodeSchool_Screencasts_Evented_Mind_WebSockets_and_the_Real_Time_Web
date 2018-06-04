var http = require('http');
var express = require('express');
var app = express();

var server = http.createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket) {
  console.log('A user is connected');
  // socket.msg('msg key', 'msg value');
});

// setInterval(function() {
//   io.emit('count', count++);  
// }, 2000);

// Using Arrow Function
// Using ES6 Fat Arrow
setInterval(() => io.emit('count', count++), 2000);

server.listen(3000);
console.log('HTTP server listening on http://%s:%s', 'localhost', '3000');