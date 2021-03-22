const inquiry = require('../models/inquiry');
const path = require('path');
const clientDir = path.join(__dirname, '../client');
const filesDir = path.join(__dirname, '../inquiryFiles');

exports.getInquiryForm = (_, res) => {
  res.sendFile(clientDir + '/inquiryForm.html');
};

exports.getInquiriesView = (_, res) => {
  const files = inquiry.getAll();
  res.render('inquiriesView', { layout: false, inquiries: files });
};

exports.postInquiry = (req, res) => {
  const requestBody = req.body;

  // Add timestamp to inquiry object
  const inquiryTimestamp = Date.now();
  requestBody.timestamp = inquiryTimestamp;

  // Convert object to string.
  const newInquiryObj = JSON.stringify(requestBody);

  const filePath = path.join(filesDir, `/inquiry_${requestBody.email}_${inquiryTimestamp.toString()}.json`);
  const result = inquiry.addOne(filePath, newInquiryObj)

  if (!result) {
    return res.sendStatus(500);
  }

  res.redirect('/')
};
