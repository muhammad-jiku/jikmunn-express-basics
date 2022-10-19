// dependencies
const express = require('express');
const handle = require('./handle');

const app = express(); // main app
const PORT = process.env.PORT || 5001;

app.all('/', (req, res) => {
  res.send('Hello there! folks!!');
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
