const net = require('net');
const SystemInformation = require('./system-information');
const tools = require('./tools');

const PORT = 5000;
const ADDRESS = '192.168.66.11';

const client = new net.Socket();

client.connect(PORT, ADDRESS, async () => {

  console.log('\n\nConnected to server!\n');

  client.write('Hello, server! ');
  try {
    // const data = await SystemInformation.getSystemInfo();
    // const data = await SystemInformation.getOsInfo();
    // const str = await tools.convertObjectToString(data);
    // client.write(`System info of client:\n${str}`);

    const hostName = await SystemInformation.getHostName();
    client.write(`${tools.getTimeStamp()} : My host name is ${hostName}\n`);

    setInterval(() => {
      client.write(`${tools.getTimeStamp()} : ${hostName} is still alived!!`)
    }, 10000);

  } catch (e) {
    console.error(e.message);
  } finally {
    // client.destroy();
  }

});

client.on('data', (data) => {
  console.log(`Received: ${data}`);
});

client.on('close', () => {
  console.log(`Connnection closed!`);
});