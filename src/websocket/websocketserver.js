const WebSocket = require('ws');

// Create websocket server
const server = new WebSocket.Server({

    port: 8080

});

server.on(

    'connection',

    socket => {

        console.log(
            'Client Connected'
        );

        // Listen for messages
        socket.on(

            'message',

            message => {

                console.log(

                    'Received:',

                    message.toString()

                );

                // Echo back message
                socket.send(

                    `Received: ${message}`

                );

            }

        );

        socket.on(

            'close',

            () => {

                console.log(

                    'Client Disconnected'

                );

            }

        );

    }

);

console.log(

'WebSocket Server Running'

);

console.log(

'ws://localhost:8080'

);