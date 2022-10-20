// dependencies
const express = require('express');
const adminRouter = require('./routes/adminRouter');
const publicRouter = require('./routes/publicRouter');

const app = express();
const PORT = process.env.PORT || 5001;

app.use('/admin', adminRouter);
app.use('/', publicRouter);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
