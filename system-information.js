const sysInfo = require('systeminformation');

class SystemInformation {

  getSystemInfo(callback) {
    sysInfo.system()
      .then((data) => {
        // console.log(`System Information: \n`, data);
        callback(null, data);
      })
      .catch((error) => {
        console.error(error);
        callback(error, null);
      });

  // sysInfo.cpu(function (data) {
  //   console.log(`CPU Information: `);
  //   console.log(data);
  // });

  }

  getOsInfo() {
    sysInfo.osInfo()
      .then((data) => {
        console.log(`OS Information: \n`,data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
module.exports = SystemInformation;