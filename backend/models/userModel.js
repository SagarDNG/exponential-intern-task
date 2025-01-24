const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: String, // Use a string ID for the user
  counter: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  prizes: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);
