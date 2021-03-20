const express = require('express');
const PORT = 3000;
const morgan = require('morgan');
const app = express();
const router = require('./router');
console.log(`=== index.js`);

app.use(morgan('tiny'))
app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => {
  console.log(`INFO: SERVER running at http://localhost:${PORT}`);
});

// app.get('/inquiry', (_, res) => res.sendFile(clientDir + '/inquiry.html'));
// app.get('/inquiries', (_, res) => {
//   console.log(`=== inquries function`);

//   filenames = fs.readdirSync(filesDir);

//   console.log("\nCurrent directory filenames:");
//   filenames.forEach(file => {
//     console.log(`Processing file = ${file}`);

//     fs.readFile(path.join(filesDir, file), (err, data) => {
//       if (err) {
//         throw err;
//       }
//       // console.log('file content =', data.toString());
//       const objData = JSON.parse(data);
//       // console.log("🚀 ~ file: index.js ~ line 32 ~ fs.readFileSync ~ objData", objData)
//       filesArray.push(objData);
//       filesArray.push({});
//       // console.log(filesArray)
//     });
//   });

//   console.log('end');
//   // filesArray.push({});
//   // setTimeout( ()=> , 10000);//
//   console.log(filesArray)
//   // Fetch all files; - iterate and read into array.
//   res.sendFile(clientDir + '/inquiries.html')
// });

// app.post('/create', checkDirectory, function(req, res) {
//   const requestBody = req.body;

//   // New property to clearly state newsletter subscription choice.
//   const subscriber = (requestBody.subscribe) ? 'Yes' : 'No';
//   requestBody.subscribeToNewsletter = subscriber;
//   // Remove unrequired property.
//   delete requestBody.subscribe;

//   // Convert object to string.
//   const newInquiryObj = JSON.stringify(requestBody);

//   const inquiryTimestamp = Date.now();
//   const filePath = path.join(__dirname, `/inquiryFiles/inquiry_${requestBody.email}_${inquiryTimestamp.toString()}.json`);

//   try {
//     fs.writeFile(filePath, newInquiryObj, (err) => {
//       if (err) console.log(err)
//     });
//   } catch (error) {
//     console.log(`ERROR: Failed to generate file for new inquiry; error =${error}`);
//     return res.sendStatus(500);
//   }

//   res.redirect('/')
// });

