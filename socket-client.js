const net = require('net');
const client = new net.Socket();

const PORT = 5000;
const ADDRESS = '192.168.66.11';

client.connect(PORT, ADDRESS, () => {
  console.log('Connected to server');
  client.write('Hello, server! This is from client');
});

client.on('data', (data) => {
  console.log(`Received: ${data}`);
  client.destroy();
});

client.on('close', () => {
  console.log(`Connnection closed!`);
});