const websocket = require('ws');

const setupwss = (server) => {
    const wss = new websocket.Server({ server });

    wss.on('connection', (ws) => {
        ws.on('message', (message) => {
          console.log(`Received: ${message}`);
        });
    
        ws.send('welcome to the websocket server!');
    });
    
    console.log('websocket server is ready');
};

module.exports = setupwss;