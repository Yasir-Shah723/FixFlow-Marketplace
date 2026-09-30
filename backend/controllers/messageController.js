const { successResponse } = require('../utils/apiResponse');

const conversations = [
  { id: 'c1', participants: ['u1', 'p1'], lastMessageAt: '2026-09-30T12:00:00.000Z', unreadCount: 2 },
];

const messages = [
  { id: 'm1', conversationId: 'c1', sender: 'u1', receiver: 'p1', text: 'Hi, can you help with my AC?', createdAt: '2026-09-30T11:50:00.000Z' },
  { id: 'm2', conversationId: 'c1', sender: 'p1', receiver: 'u1', text: 'Yes, I can inspect it today. Please share the unit details.', createdAt: '2026-09-30T11:57:00.000Z' },
];

const getConversations = async (req, res) => {
  return successResponse(res, 'Conversations fetched successfully.', { conversations });
};

const getMessagesByConversation = async (req, res) => {
  return successResponse(res, 'Messages fetched successfully.', {
    messages: messages.filter((message) => message.conversationId === req.params.conversationId),
  });
};

const sendMessage = async (req, res) => {
  const message = { id: `m${Date.now()}`, ...req.body, createdAt: new Date().toISOString() };
  messages.push(message);
  return successResponse(res, 'Message sent successfully.', { message }, 201);
};

module.exports = { getConversations, getMessagesByConversation, sendMessage };
