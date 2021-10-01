const UserModel = require('../Models/User');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = '10!@somehashhere#$01';

exports.login = async (req, res, next) => {
  const { password, username } = req.body;
  const hash = crypto.createHmac('sha256', secret)
    .update(password)
    .digest('hex');

  const user = await UserModel.findOne({ username, password: hash });
  if(user) {
    const token = jwt.sign({ userId: user._id }, secret);
    res.send({ auth: true, token })
  } else {
    res.status(401).send({ 
      auth: false,
      error: 'Usuário ou senha inválidos.'
    });
  }
}