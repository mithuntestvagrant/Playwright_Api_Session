import WebSocket from 'ws';

const socket = new WebSocket('ws://localhost:8080');

socket.on('open', () => {
    console.log('Connected to server');
    socket.send('Hello Server!');
});

socket.on('message', (message) => {
    console.log('Server Response:', message.toString());
});

socket.on('close', () => {
    console.log('Connection Closed');
});

socket.on('error', (error) => {
    console.error('Error:', error);
});