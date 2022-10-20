// dependencies
const express = require('express');
const adminRouter = require('./adminRouter');
const publicRouter = express.Router();

publicRouter.use((req, res, next) => {
  console.log('Hola, kon bola??');
  next();
});

publicRouter.use(adminRouter);

module.exports = publicRouter;
