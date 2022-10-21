// dependencies
const express = require('express');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 5001;

// file upload folders
const UPLOADS_FOLDER = './uploads/';

let upload = multer({
  dest: UPLOADS_FOLDER,
});

app.get('/', (req, res) => {
  res.send('Hello there! folks!!');
});

app.post('/', upload.none(), (req, res) => {
  res.send('Hola, This is US!!');
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
