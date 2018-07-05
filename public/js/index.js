var socket = io();
socket.on('connect',() => {
    console.log('connected to server');
    
}); 
socket.on('disconnect',() => {
    console.log('diconnected from sever');
    
});

socket.on('newMessage',(message) => {
    console.log('message',message);
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    $('#messages').append(li);
    
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
      from: 'User',
      text: $('[name=message').val()
  }, function (data) {
       console.log(data);
       
  });
});