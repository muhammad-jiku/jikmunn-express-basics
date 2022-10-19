// dependencies
const express = require('express');
const app = express(); // main app
const PORT = process.env.PORT || 5001;

const adminRoute = express.Router(); // sub app
adminRoute.get('/dashboard', (req, res) => {
  res.send('WELCOME to the Admin Dashboard!!');
});

//
app.use(express.json());
app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
