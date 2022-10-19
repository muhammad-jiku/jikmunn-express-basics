// dependencies
const express = require('express');
const handle = require('./handle');

const app = express();
const PORT = process.env.PORT || 5001;

// app.locals
app.locals.title = 'This is TITLE!!';

app.get('/', handle);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
