// models/Chat.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  // Thêm các trường khác nếu cần, như là tên chat hoặc thời gian tạo
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
