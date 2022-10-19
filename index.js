// dependencies
const { application } = require('express');
const express = require('express');
// const handle = require('./handle');

const app = express(); // main app
const PORT = process.env.PORT || 5001;

app.set('view engine', 'ejs');

app
  .route('/home')
  .get((req, res) => {
    res.render('pages/home');
  })
  .post((req, res) => {
    res.send('Hello there! folks this is post method!!');
  })
  .put((req, res) => {
    res.send('Hello there! folks this is put method!!');
  });

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
