// dependencies
const express = require('express');
// const handle = require('./handle');

const app = express(); // main app
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.param('id', (req, res, next, id) => {
  const user = {
    id,
    name: 'Muhammad Azizul Hoque Jiku',
  };
  req.userDetails = user;
  next();
});

app.get('/user/:id', (req, res) => {
  console.log(req.userDetails);
  res.send('Hello there! folks!!');
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
