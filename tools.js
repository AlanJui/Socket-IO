const moment = require('moment');
const TIME_FORMAT = `YYYY-MM-DD HH:mm:ss Z`;

exports.getTimeStamp = function () {
  let now = moment();
  return now.format(TIME_FORMAT);
  // let timeStamp = new Date();
  // return timeStamp.toLocaleTimeString();
}

exports.convertObjectToString = async function (obj) {
  let str = '';

  return new Promise((resolve) => {
    Object.keys(obj).forEach(function (key) {
      const value = obj[key];
      str += `${key}: ${value}\n`;
    });

    resolve(str);
  });

};

exports.outputObject = function (obj, outputMethod) {
  let str = '';
  Object.keys(obj).forEach(function (key) {
    const value = obj[key];
    str = `${key}: ${value}\n`;
    outputMethod(str);
    console.log(str);
  });
};