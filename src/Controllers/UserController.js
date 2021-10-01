const User = require('../Models/User');
const UserModel = require('../Models/User');
const crypto = require('crypto');
const secret = '10!@somehashhere#$01'; //Passar para .env posteriormente

exports.post = async (req, res, next) => {
  const hash = crypto.createHmac('sha256', secret)
    .update(req.body.password)
    .digest('hex');

  const user = await UserModel.create({
    ...req.body,
    password: hash
  });
  res.status(200).send(user);
}

exports.put = async (req, res, next) => {
  const id = req.params.id;
  const userUpdate = req.body;

  await UserModel.updateOne({ _id: id}, userUpdate);

  const user = await UserModel.findOne({ _id: id });

  res.status(201).send(user);
}

exports.delete = async (req, res, next) => {
  let id = req.params.id;
  await UserModel.deleteOne({ _id: id });
  res.status(200).send({ deleted: true });
}

exports.get = async (req, res, next) => {
  const users = await UserModel.find(); 
  res.status(200).send(users);
}

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const user = await UserModel.findOne({ _id: id })
  res.status(200).send(user);
}