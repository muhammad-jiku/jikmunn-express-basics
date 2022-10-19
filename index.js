// dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.cookie('countryCode', 'BD');
  res.end();
});

app.get('/about', (req, res) => {
  res.cookie('country', 'bangladesh');
  res.end();
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
