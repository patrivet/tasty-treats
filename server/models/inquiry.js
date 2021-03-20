const fs = require('fs');
const path = require('path');
const filesDir = path.join(__dirname, '../inquiryFiles');

exports.getAll = () => {
  filenames = fs.readdirSync(filesDir);

  filenames.forEach(file => {
    console.log(`Processing file = ${file}`);
    fs.readFile(path.join(filesDir, file), (err, data) => {
      if (err) {
        throw err;
      }
      const objData = JSON.parse(data);
    });
  });

  // Fetch all files; - iterate and read into array.
  // TBC
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
