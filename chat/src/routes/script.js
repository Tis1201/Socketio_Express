// routes/users.js
const express = require('express');
const User = require('../models/User'); // Đảm bảo đường dẫn chính xác đến model User
const router = express.Router();

// Thêm người dùng mới
router.post('/add', async (req, res) => {
  try {
    const { username, age } = req.body;
    const newUser = new User({ username, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
