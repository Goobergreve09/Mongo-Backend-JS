const { Schema, model } = require('mongoose');

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
      },
    username_thought: {
      type: String,
      required: true,
    },
    reactions: [assignmentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;