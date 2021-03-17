const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 3000;

app.use(morgan('tiny'))
app.use(express.static('client'));

app.listen(PORT, () => {
  console.log(`INFO: SERVER running at http://localhost:${PORT}`);
});
