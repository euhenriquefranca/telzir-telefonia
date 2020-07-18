// var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

// app.use(express.static('client'));
// app.use("/static", express.static('./static/'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

// server.listen(PORT, function() {
//   console.log('Chat server running');
// });

// var io = require('socket.io')(server);

// io.on('connection', function(socket) {
//   socket.on('message', function(msg) {
//     io.emit('message', msg);
//   });
// });

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(process.env.PORT || 3000,() => {
  console.log(`Rodando ${process.env.PORT || 3000}`);
});