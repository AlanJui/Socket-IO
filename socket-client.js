const net = require('net');
const SystemInformation = require('./system-information');

const client = new net.Socket();
const sysInfo = new SystemInformation();

const PORT = 5000;
const ADDRESS = '192.168.66.11';

const convertObjectToString = function (obj, callback) {
  let str = '';

  Object.keys(obj).forEach(function (key) {
    const value = obj[key];
    str += `${key}: ${value}\n`;
  });

  callback(str);
};

const outputObject = function (obj, outputMethod) {
  let str = '';
  Object.keys(obj).forEach(function (key) {
    const value = obj[key];
    str = `${key}: ${value}\n`;
    outputMethod(str);
    console.log(str);
  });
};

client.connect(PORT, ADDRESS, () => {
  console.log('Connected to server!\n\n');
  client.write('Hello, server! ');

  sysInfo.getSystemInfo(function (err, data) {
    if (err) throw err;

    convertObjectToString(data, (systemInfo) => {
      client.write(`System info of client:\n${systemInfo}`);
      // client.write(systemInfo);
    })
    // client.destroy();
  });
});

client.on('data', (data) => {
  console.log(`Received: ${data}`);
});

client.on('close', () => {
  console.log(`Connnection closed!`);
});