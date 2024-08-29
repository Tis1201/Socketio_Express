const express = require('express');
const { createServer } = require('node:http');
const {join} = require('node:path')
const {Server} = require('socket.io')
const connectDB = require('./src/config/db')
const userRoutes = require('./src/routes/script');
const app = express();
const server = createServer(app);
const io = new Server(server)

connectDB();
app.use(express.json());
app.use('/api/users', userRoutes);

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('message', (data) => {
    console.log(`Message from ${data.username}: ${data.text}`);
    io.emit('message', data); // Phát tin nhắn đến tất cả người dùng
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

app.use(express.static('public'));

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});