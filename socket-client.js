const net = require('net');
const SystemInformation = require('./system-information');
const tools = require('./tools');

const PORT = 5000;
const ADDRESS = '192.168.66.11';

const client = new net.Socket();

client.connect(PORT, ADDRESS, async () => {

  console.log('Connected to server!\n\n');

  client.write('Hello, server! ');
  try {
    // const data = await SystemInformation.getSystemInfo();
    const data = await SystemInformation.getOsInfo();
    const str = await tools.convertObjectToString(data);
    client.write(`System info of client:\n${str}`);
  } catch (e) {
    console.error(e.message);
  }
});

client.on('data', (data) => {
  console.log(`Received: ${data}`);
});

client.on('close', () => {
  console.log(`Connnection closed!`);
});