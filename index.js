// dependencies
const express = require('express');
const handler = require('./handler');
// const cookieParser = require('cookie-parser');

const app = express(); // main app
const PORT = process.env.PORT || 5001;

const adminRoute = express.Router(); // sub app
adminRoute.get('/dashboard', (req, res) => {
  res.send('WELCOME to the Admin Dashboard!!');
});

//
app.use(express.json());
// app.use(cookieParser());
app.use('/admin', adminRoute);

app.get('/user/:id', handler);

app.post('/user', (req, res) => {
  console.log(req.route);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
