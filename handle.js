const handle = (req, res) => {
  console.log(req.app.locals);
  res.send('Hello there! folks!!');
};

module.exports = handle;
