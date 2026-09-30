const { Server } = require('socket.io');

const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:5173',
      methods: ['GET', 'POST'],
    },
  });

  const connectedUsers = new Map();

  io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;
    if (userId) {
      connectedUsers.set(userId, socket.id);
      socket.join(`user:${userId}`);
      io.emit('online-status', { userId, online: true });
    }

    socket.on('join-room', ({ conversationId }) => {
      if (conversationId) socket.join(conversationId);
    });

    socket.on('send-message', (payload) => {
      const room = payload.conversationId;
      if (room) {
        io.to(room).emit('message-received', payload);
      }
    });

    socket.on('typing', ({ conversationId, userId, isTyping }) => {
      if (conversationId) {
        socket.to(conversationId).emit('typing-status', { conversationId, userId, isTyping });
      }
    });

    socket.on('booking-status-update', (payload) => {
      io.emit('booking-status', payload);
    });

    socket.on('notification', (payload) => {
      io.to(`user:${payload.userId}`).emit('new-notification', payload);
    });

    socket.on('disconnect', () => {
      for (const [id, sid] of connectedUsers.entries()) {
        if (sid === socket.id) {
          connectedUsers.delete(id);
          io.emit('online-status', { userId: id, online: false });
          break;
        }
      }
    });
  });

  return io;
};

module.exports = { initializeSocket };
