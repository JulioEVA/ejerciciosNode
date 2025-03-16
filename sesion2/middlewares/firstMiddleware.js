module.exports.myFirstMiddleware = (req, res, next) => {
  if (!req.body.data) {
    return res
      .status(400)
      .send(JSON.stringify({ message: 'Data is required' }));
  }
  next();
};
