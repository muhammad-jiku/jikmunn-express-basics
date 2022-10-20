// dependencies
const express = require('express');
const publicRouter = express.Router();

const log = (req, res, next) => {
  console.log('this is simple log function');
  next();
};

publicRouter.all('*', log);

publicRouter.get('/', (req, res) => {
  res.send('Hello there! folks!!');
});

module.exports = publicRouter;
