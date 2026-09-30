const { errorResponse } = require('../utils/apiResponse');

const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack || err.message);
  }

  if (statusCode === 404) {
    return errorResponse(res, 'Route not found.', [err.message], 404);
  }

  return errorResponse(
    res,
    err.message || 'Something went wrong on the server.',
    process.env.NODE_ENV === 'production' ? [] : [err.stack || err.message],
    statusCode
  );
};

module.exports = { notFound, errorHandler };
