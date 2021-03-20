const router = require('express').Router();
const inquiry = require('./controllers/inquiry');
const { checkDirectory } = require('./utils');

// Define endpoints to pass control to the controller
router.get('/inquiryForm', inquiry.getInquiryForm);
router.get('/inquiries', inquiry.getInquiriesView);
router.post('/create', checkDirectory, inquiry.postInquiry);

module.exports = router;
