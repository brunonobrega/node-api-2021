const AuthRoute = require('./AuthRoute');
const UserRoute = require('./UserRoute');

module.exports = (app) => {
  UserRoute(app);
  AuthRoute(app);
}