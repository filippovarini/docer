const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  team: {
    type: Number,
    required: true
  },
  answers: {
    type: [Boolean],
    required: true
  }
});

module.exports = Answer = mongoose.model("Answers", AnswerSchema);
