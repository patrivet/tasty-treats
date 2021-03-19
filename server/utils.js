const fs = require('fs');
const path = require('path');
const directory = path.join(__dirname, '/inquiryFiles/');

// Create directory for inquiryfiles
const checkDirectory = function (_, _, next) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  next();
}

module.exports = {
  checkDirectory
}