const { Schema, Types } = require('mongoose');
const { format } = require("date-fns");

const reactionSchema = new Schema(
    {
      reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        max_length: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => format(createdAtVal, "yyyy-MM-dd HH:mm:ss"),
      },
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );

  module.exports = reactionSchema;