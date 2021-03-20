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
