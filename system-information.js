const sysInfo = require('systeminformation');
const os = require('os');

class SystemInformation {

  static async getHostName() {
    try {
      const data = await os.hostname();
      return data;
    } catch (e) {
      throw new Error('Can not get Host name!');
    }
  }

  static async getSystemInfo() {
    try {
      const data = await sysInfo.system();
      return data;
    } catch (e) {
      throw new Error('Can not get system information!');
    }
  }

  static async getOsInfo() {
    try {
      const data = await sysInfo.osInfo();
      return data;
    } catch (e) {
      throw new Error('Can not get OS information');
    }
  }
}
module.exports = SystemInformation;