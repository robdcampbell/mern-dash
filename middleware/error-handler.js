const errorHandlerMiddleware = (err, req, res, next) => {
  // throws error received from one of the controllers
  res.status(500).json({ msg: err });
};

export default errorHandlerMiddleware;
