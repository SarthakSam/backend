const route = require('express').Router();

// route.use('/users',require('./users').route);
// route.use('/products',require('./products').route);
// route.use('/cart',require('./cart').route);
  route.use('/upload',require('./upload').route);
  route.get('/', function (req, res) {
  res.end('file catcher example');
  });

module.exports = { route };
