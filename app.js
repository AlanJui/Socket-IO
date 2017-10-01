#!/usr/bin/env node
'use strict';

// importing Server class
const Server = require('./server');

// App configuration
const PORT = 5000;
// const ADDRESS = '127.0.0.1';
const ADDRESS = '0.0.0.0';

var server = new Server(PORT, ADDRESS);

// Starting server
server.start(() => {
  console.log(`Server started at: ${ADDRESS}:${PORT}`);
});
