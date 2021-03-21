const fs = require('fs');
const path = require('path');
const filesDir = path.join(__dirname, '../inquiryFiles');

exports.getAll = () => {
  filenames = fs.readdirSync(filesDir);
  let files = [];

  filenames.forEach(file => {
    fs.readFile(path.join(filesDir, file), (err, data) => {
      if (err) {
        throw err;
      };
      if (data) {
        try {
          files.push(JSON.parse(data));
        } catch (error) {
          console.log(`ERROR: peforming JSON parse. Error =${error}`)
        }
      }
    });
  });

  return files;
}

exports.addOne = (filePath, newInquiryObj) => {
  try {
    fs.writeFile(filePath, newInquiryObj, (err) => {
      if (err) console.log(err)
    });
  } catch (error) {
    console.log(`ERROR: Failed to generate file for new inquiry; error =${error}`);
    return false;
  }
  return true;
};
