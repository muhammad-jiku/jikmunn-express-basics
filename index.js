// dependencies
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5001;

app.get('/', [
  (req, res, next) => {
    fs.readFile('/file-doesnot-exist', 'utf-8', (err, data) => {
      console.log(data);
      next(err);
    });
  },
  (req, res, next) => {
    console.log(data.property);
  },
]);

app.use((req, res, next) => {
  console.log('I am not called yet!');
  next();
});

// 404 error handling
app.use((req, res, next) => {
  // console.log(next);
  // res.status(404).send('Requested url is not found!!')
  next('Requested URL is not found!!'); // next() function is using to send the response to the next middleware
});

app.use((err, req, res, next) => {
  // console.log(next);
  if (res.headersSent) {
    console.log(err);
    next('There was an error in the request!!');
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.send('There was an error in the server side!!');
    }
  }
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
