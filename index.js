var http = require("http")
var express = require('express');
var socket = require('socket.io');

//App setup

var app = express();
app.use(express.static(__dirname + "/"));

var port = process.env.PORT || 4000;

var server = http.createServer(app);
server.listen(port);


//static files

app.use(express.static('public'));

// Socket setup

var io = socket(server);

io.on('connection', function(socket){
  console.log('made socket connection',socket.id);

  socket.on('chat',function(data){
    io.sockets.emit('chat',data);
  });
});
