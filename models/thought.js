const { Schema, model } = require("mongoose");
const reactionSchema = require('./reaction')


// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thought_text: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username_thought: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
