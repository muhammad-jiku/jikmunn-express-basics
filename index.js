// dependencies
const express = require('express');
// const handle = require('./handle');

const app = express(); // main app
const PORT = process.env.PORT || 5001;

app.enable('case sensitive routing');
app.disable('case sensitive routing');

app.all('/home', (req, res) => {
  res.send('Hello there! folks!!');
});

app.use(express());

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
