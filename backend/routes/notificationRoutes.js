const express = require('express');
const { getNotifications, markAsRead, markAllAsRead } = require('../controllers/notificationController');
const { authenticateUser } = require('../middleware/auth');

const router = express.Router();

router.get('/notifications', authenticateUser, getNotifications);
router.patch('/notifications/:id/read', authenticateUser, markAsRead);
router.patch('/notifications/read-all', authenticateUser, markAllAsRead);

module.exports = router;
