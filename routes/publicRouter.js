// dependencies
const express = require('express');
const publicRouter = express.Router();

publicRouter.param((param, option) => (req, res, next, val) => {
  //   console.log(typeof val, typeof option);
  if (val === option) {
    next();
  } else {
    res.sendStatus(403);
  }
});

publicRouter.param('user', '164');

publicRouter.get('/', (req, res) => {
  res.send('Hello there! folks!!');
});

publicRouter.get('/:user', (req, res) => {
  res.send(`Kire ki obostha! `);
});

module.exports = publicRouter;
