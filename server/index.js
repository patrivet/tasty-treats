const express = require('express');
const PORT = 3000;
const morgan = require('morgan');
const app = express();
const fs = require('fs');
const path = require('path');
const { checkDirectory } = require('./utils');

app.use(morgan('tiny'))
app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }));
app.use(checkDirectory);

app.post('/create', checkDirectory, function(req, res) {
  const requestBody = req.body;

  // New property to clearly state newsletter subscription choice.
  const subscriber = (requestBody.subscribe) ? 'Yes' : 'No';
  requestBody.subscribeToNewsletter = subscriber;
  // Remove unrequired property.
  delete requestBody.subscribe;

  // Convert object to string.
  const newInquiryObj = JSON.stringify(requestBody);

  const inquiryTimestamp = Date.now();
  const filePath = path.join(__dirname, `/files/inquiry_${requestBody.email}_${inquiryTimestamp.toString()}.json`);

  try {
    fs.writeFile(filePath, newInquiryObj, (err) => {
      if (err) console.log(err)
    });
  } catch (error) {
    console.log(`ERROR: Failed to generate file for new inquiry; error =${error}`);
    return res.sendStatus(500);
  }

  res.redirect('/')
});

app.listen(PORT, () => {
  console.log(`INFO: SERVER running at http://localhost:${PORT}`);
});
