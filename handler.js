const handler = (req, res) => {
  console.log(req.app.get('view engine'));
  res.send('WELCOME!!');
};

module.exports = handler;
