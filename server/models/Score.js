const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const scoreSchema = new Schema(
  {
    score: {
      type: Number,
      required: 'You need enter a score!',
      min: 20,
      max: 150
    },
    par: {
      type: Number,
      required: 'You need enter a score!',
      min: 20,
      max: 150
    },
    course: {
      type: String,
      required: 'You need to enter a course!'
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

scoreSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Score = model('Score', scoreSchema);

module.exports = Score;
