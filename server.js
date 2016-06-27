'use strict';

// Constants
const PORT = 8080;

// Express
const express = require('express');
// Web Server
const app = express();
app.use(express.static('public'));

// Duplicate HTTP server on Express port
const server = require('http').Server(app);

// Listen with Express and Socket.io
server.listen(PORT);
console.log('Running on http://localhost:' + PORT);

// Sockets lib
const sockets = require('./sockets');
const socketsConfig = {
  "rooms": {
    "maxClients": 0
  },
  "stunservers": [
    {
      "url": "stun:stun.l.google.com:19302"
    }
  ],
  "turnservers": [
    {
      "url": "turn:54.68.15.27",
      "secret": "testpass",
      "expiry": 86400
    }  
  ]
};
sockets(server, socketsConfig);
