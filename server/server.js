const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
//get web socket server back
var io = socketIO(server);

io.on('connection', (socket) => {
   console.log('new user connected');
   socket.on('disconnect',() => {
       console.log('client disconnected');
       
   });
  

   socket.on('createMessage',(message,callback) => {
       
       socket.broadcast.emit('newMessage',generateMessage(message.from, message.text));
       callback('got the message');
   });
   socket.emit('newMessage',generateMessage('Admin','Welcome to chat App'));
   socket.broadcast.emit('newMessage',generateMessage('Admin', 'New user joined'));

});

//static middleware
app.use(express.static(publicPath));



server.listen(port, () => {
    console.log(`server is running on port ${port}`);
    
});
