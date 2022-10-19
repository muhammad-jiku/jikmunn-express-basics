// dependencies
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express(); // main app
const PORT = process.env.PORT || 5001;

const adminRoute = express.Router(); // sub app
adminRoute.get('/dashboard', (req, res) => {
  res.send('WELCOME to the Admin Dashboard!!');
});

//
app.use(express.json());
app.use(cookieParser());
app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
});

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
