const express = require('express');
const { getDashboardStats, getAnalytics, getNotifications } = require('../controllers/adminController');
const { authenticateUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/admin/stats', authenticateUser, authorizeRoles('admin'), getDashboardStats);
router.get('/admin/analytics', authenticateUser, authorizeRoles('admin'), getAnalytics);
router.get('/admin/notifications', authenticateUser, authorizeRoles('admin'), getNotifications);

module.exports = router;
