// models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  // Thêm các trường khác nếu cần
});

const User = mongoose.model('User', userSchema);
module.exports = User;
