'use strict';

const SystemInformation = require('./system-information');

const sysIno = new SystemInformation();

sysIno.getSystemInfo(function (SystemInformation) {
  console.log(`System Information: \n`, SystemInformation);
});

sysIno.getOsInfo();