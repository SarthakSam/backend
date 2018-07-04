const route = require('express').Router();

// route.use('/users',require('./users').route);
// route.use('/products',require('./products').route);
// route.use('/cart',require('./cart').route);
  route.use('/upload',require('./upload').route);
  route.use('/listings',require('./listings').route);
  route.use('/wishlist',require('./wishlist').route);
  route.use('/messages',require('./messages').route);
module.exports = { route };
