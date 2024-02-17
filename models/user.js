const { Schema, model } = require('mongoose');


// Schema to create Student model
const userSchema = new Schema(
  {
    user_name: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique:true,
      max_length: 50,
      match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.virtual('friendCount').get(function() {
  // This ensures friends is populated before accessing its length
  return this.friends ? this.friends.length : 0;
});

const User = model('User', userSchema);

module.exports = User;