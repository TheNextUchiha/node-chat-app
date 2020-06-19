const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8080;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to The Chat App'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'A New User joined'));

    socket.on('createMessage', (message) => {
        console.log('Message recieved', message);

        io.emit('newMessage', generateMessage(message.from, message.text));
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });

    socket.on('disconnect', () => {
        console.log('User disconnected/left');
        socket.broadcast.emit('newMessage', generateMessage('Admin', 'A User left'));
    });
});

server.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});