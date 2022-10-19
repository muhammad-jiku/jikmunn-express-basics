// dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.format({
    'text/plain': () => {
      res.send('Hola amigos!');
    },
    'text/html': () => {
      res.render('pages/home', {
        countryCode: 'BD',
      });
    },
    'application/json': () => {
      res.json({
        message: 'Homepage',
      });
    },
    default: () => {
      res.status(406).send('Not acceptable!!');
    },
  });
});

app.get('/about', (req, res) => {
  res.format({
    'text/plain': () => {
      res.send('Hello there!!');
    },
    'text/html': () => {
      res.render('pages/about', {
        country: 'Bangladesh',
      });
    },
    'application/json': () => {
      res.json({
        message: 'About page',
      });
    },
    default: () => {
      res.status(406).send('Not acceptable!');
    },
  });
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
