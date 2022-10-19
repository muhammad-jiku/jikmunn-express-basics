// dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.redirect('/home');
  res.end();
});

app.get('/home', (req, res) => {
  res.send('Bangladesh');
});

app.get('/about', (req, res) => {
  res.location('/home');
  res.end();
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
