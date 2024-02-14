const { Schema, model } = require('mongoose');


// Schema to create Student model
const userSchema = new Schema(
  {
    user_name: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;