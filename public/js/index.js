var socket = io();
socket.on('connect',() => {
    console.log('connected to server');
    
}); 
socket.on('disconnect',() => {
    console.log('diconnected from sever');
    
});

socket.on('newMessage',(message) => {
    console.log('message',message);
    
});
