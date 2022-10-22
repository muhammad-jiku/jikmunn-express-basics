// dependencies
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// file upload folders
const UPLOADS_FOLDER = './uploads/';

// define the storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, '')
        .toLowerCase()
        .split(' ')
        .join('-') +
      '-' +
      Date.now();

    cb(null, fileName + fileExt);
  },
});

let upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000, // 1MB
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'avatar') {
      if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
      ) {
        cb(null, true);
      } else {
        cb(new Error('Only .jpg, .png or .jpeg format allowed!'));
      }
    } else if (file.fieldname === 'doc') {
      if (file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new Error('Only .pdf format allowed!'));
      }
    } else {
      cb(new Error('There was an unknown error!'));
    }
  },
});

app.get('/', (req, res) => {
  res.send('Hello there! folks!!');
});

// application route
app.post(
  '/',
  upload.fields([
    {
      name: 'avatar',
      maxCount: 1,
    },
    {
      name: 'doc',
      maxCount: 1,
    },
  ]),
  (req, res, next) => {
    console.log(req.files);
    res.send('success');
  }
);

// default error handler
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send('There was an upload error!');
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send('success');
  }
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
