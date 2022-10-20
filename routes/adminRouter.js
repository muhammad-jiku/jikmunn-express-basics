const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
  res.send('Admin dashboard');
});

adminRouter.get('/login', (req, res) => {
  res.send('Log In');
});

module.exports = adminRouter;
