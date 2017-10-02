'use strict';

const net = require('net');
const Client = require('./client');

const DEFAULT_PORT = 5000;
const DEFAULT_ADDRESS = '0.0.0.0';

class Server {

  constructor(port, address) {
    this.port = port || DEFAULT_PORT;
    this.address = address || DEFAULT_ADDRESS;
    this.clients = [];
  }

  /**
   * Starting the server
   * The callback argument is executed when the server finally inits
   */
  start(callback) {
    let server = this;
    server.connection = net.createServer((socket) => {
      let client = new Client(socket);
      console.log(`New connection from: ${client.name}`);

      // Broadcast to everyone connected the new client connection
      server.broadcast(`${client.name} connected.\n\n`, client);

      // Storing client for later usage
      server.clients.push(client);

      // Triggered on message received by this client
      socket.on('data', (data) => {
        let msg = data.toString().replace(/[\n\r]*$/, '');
        // console.log(`${client.name} said: ${msg}`);
        socket.write(`We got your message listed below:\n${msg}\n`);

        // Broadcasting the client's message to the other clients
        server.broadcast(`${client.name} says: ${data}\n`, client);
      });

      // Triggered when this client disconnects
      socket.on('end', () => {
        // Removing the client from the list
        server.clients.splice(server.clients.indexOf(client), 1);
        // console.log(`${client.name} disconnected.`);
        // Broadcasting that this client left
        server.broadcast(`${client.name} disconnected.\n`);
      });

      socket.on('error', (err) => {
        console.error(`Connection error:`);
        console.error(err.stack);

        // Removing the client from the list
        server.clients.splice(server.clients.indexOf(client), 1);
        // console.log(`${client.name} disconnected.`);
        // Broadcasting that this client left
        server.broadcast(`${client.name} disconnected.\n`);

        console.log(`\n\n====================================================`);
      });
    });

    // starting the server
    server.connection.listen(this.port, this.address);

    // setuping the callback of the start function
    server.connection.on('listening', callback);

  }

  /**
   * Broadcasts messages to the network
   * The clientSender doesn't receive it's own message
   * @param message
   * @param clientSender
   */
  broadcast(message, clientSender) {
    this.clients.forEach((client) => {
      if (client === clientSender) return;
      client.receiveMessage(message);
    });
    console.log(message.replace(/\n+$/, ''));
  }
}
module.exports = Server;