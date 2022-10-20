// dependencies
const express = require('express');
const publicRouter = express.Router();

publicRouter.param('user', (req, res, next, id) => {
  req.user = id === '1' ? 'Admin' : 'Anonymous';
  next();
});

publicRouter.get('/', (req, res) => {
  res.send('Hello there! folks!!');
});

publicRouter.get('/:user', (req, res) => {
  res.send(`Kire ki obostha! ${req.user}`);
});

module.exports = publicRouter;
