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
  res.set('Title', 'JIKMUNN');
  console.log(res.get('Title'));
  res.end();
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
