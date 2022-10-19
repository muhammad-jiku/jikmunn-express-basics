// dependencies
const express = require('express');
const app = express(); // main app
const PORT = process.env.PORT || 5001;

const adminRoute = express.Router(); // sub app
adminRoute.get('/dashboard', (req, res) => {
  console.log(req.path);
  console.log(req.hostname);
  console.log(req.protocol);
  res.send('WELCOME to the Admin Dashboard!!');
});

//
app.use('/admin', adminRoute);

app.get('/home', (req, res) => {
  console.log(req.path);
  console.log(req.hostname);
  console.log(req.protocol);
  res.send('Hello there! folks!!');
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
