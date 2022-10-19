// dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log(res.headersSent);
  res.render('pages/home', {
    countryCode: 'BD',
  });
  console.log(res.headersSent);
});

app.get('/about', (req, res) => {
  console.log(res.headersSent);

  res.render('pages/about', {
    country: 'Bangladesh',
  });
  console.log(res.headersSent);
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
