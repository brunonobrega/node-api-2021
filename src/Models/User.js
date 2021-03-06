const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bio: String,
  photo: {
    type: String,
    required:  true,
  }
}, {
  timestamps: true,
});

module.exports = model('Users', UserSchema);