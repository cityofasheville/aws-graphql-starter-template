

const middlewares = [
  function sample(req, res, next) {
    // You can insert middleware code here, or just delete this function.
    console.log('Here in the middleware');
    next();
  },
];

module.exports = middlewares;
