import { test, expect } from '@playwright/test';
import WebSocket from 'ws';

test('websocket test', async () => {
    await new Promise<void>((resolve) => {
        const socket = new WebSocket('ws://localhost:8080');

        socket.on('open', () => {
            console.log('Connected to server');
            socket.send('Hello Server!');
        });

        socket.on('message', (message: WebSocket.RawData) => {
            const response = message.toString();

            console.log('Server Response:', response);

            expect(response).toBe('Received: Hello Server!');

            socket.close();
            resolve();
        });

        socket.on('error', (error: Error) => {
            throw error;
        });
    });
});