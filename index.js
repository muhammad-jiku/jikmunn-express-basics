// dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Hello there! folks!!');
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
