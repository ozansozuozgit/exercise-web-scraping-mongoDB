const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  amount: {
    type: Number,
  },
  exerciseList: {
    type: { String },
    required: true,
  },
});

module.exports = mongoose.model('Exercises', exerciseSchema);
