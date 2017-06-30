function customResponses(req, res, next) {
  res.notFound = function notFound() {
    const err = new Error('Not Found');
    err.status = 404;

    throw err;
  };

  res.badRequest = function badRequest() {
    const err = new Error('Bad Request');
    err.status = 400;

    throw err;
  };

  res.unauthorized = function unauthorized() {
    const err = new Error('Unauthorized');
    err.status = 401;

    throw err;
  };

  next();
}

module.exports = customResponses;
