const express = require('express');
const { getConversations, getMessagesByConversation, sendMessage } = require('../controllers/messageController');
const { authenticateUser } = require('../middleware/auth');

const router = express.Router();

router.get('/messages/conversations', authenticateUser, getConversations);
router.get('/messages/:conversationId', authenticateUser, getMessagesByConversation);
router.post('/messages', authenticateUser, sendMessage);

module.exports = router;
