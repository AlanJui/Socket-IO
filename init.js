#!/usr/bin/env node
'use strict';

// Load the NodeJS TCP Library
const net = require('net');

const PORT = 5000;
// const ADDRESS = '127.0.0.1';
const ADDRESS = '0.0.0.0';

function onClientConnected(socket) {
  console.log(`New client: ${socket.remoteAddress}:${socket.remotePort}`);
  socket.destroy();
}

let server = net.createServer(onClientConnected);
server.listen(PORT, ADDRESS);

console.log(`Server started at: ${ADDRESS}:${PORT}`);