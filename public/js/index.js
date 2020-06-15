var socket = io();

socket.on('connect', function () {
    console.log('Connected to Server');

    socket.on('newMessage', function(message) {
        console.log('Got a new message', message);
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected form the server');
});