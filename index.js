// dependencies
const express = require('express');
const handle = require('./handle');

const app = express(); // main app
const admin = express(); // sub app
const PORT = process.env.PORT || 5001;

admin.get('/dashboard', (req, res) => {
  console.log(admin.mountpath);
  res.send('Hello friends of admin!!');
});

app.get('/', (req, res) => {
  console.log(app.mountpath);
  res.send('Hello there! folks!!');
});

app.use('/admin', admin);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
