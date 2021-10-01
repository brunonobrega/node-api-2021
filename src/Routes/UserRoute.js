const UserController = require('../Controllers/UserController');
const crypto = require('crypto');
const auth = require('../Middlewares/Auth').auth;

module.exports = (app) => {
  app.post('/user', auth, UserController.post);
  app.put('/user/:id', auth, UserController.put);
  app.delete('/user/:id', auth, UserController.delete);
  app.get('/users', auth, UserController.get);
  app.get('/user/:id', auth, UserController.getById);
}