
const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
            res.writeHead(200);
            res.end(data);
        });
    }
});

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send(`You wrote: ${message}`);
    });

    ws.send('Hello! Connection established.');
});

server.listen(3001, () => {
    console.log('HTTP and WebSocket server started on port 3001');
});
