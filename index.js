// dependencies
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express(); // main app
const adminRouter = express.Router(); // sub app

const PORT = process.env.PORT || 5001;
const logger = (req, res, next) => {
  console.log(
    `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${
      req.originalUrl
    } - ${req.protocol} - ${req.ip}`
  );
  next();
};

// middleware
// built-in middleware
app.use(express.json());

// third party middleware
app.use(cookieParser());

// custom middleware
app.use('/admin', adminRouter);
adminRouter.use(logger);

app.get('/', (req, res) => {
  res.send('Hello there! folks!!');
});

adminRouter.get('/dashboard', (req, res) => {
  res.send("Welcome to the admin's dasboard!!");
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
