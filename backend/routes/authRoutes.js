const express = require('express');
const { registerUser, loginUser, getCurrentUser, updateProfile, changePassword, forgotPassword, resetPassword } = require('../controllers/authController');
const { authenticateUser } = require('../middleware/auth');

const router = express.Router();

router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);
router.get('/auth/me', authenticateUser, getCurrentUser);
router.put('/auth/profile', authenticateUser, updateProfile);
router.put('/auth/change-password', authenticateUser, changePassword);
router.post('/auth/forgot-password', forgotPassword);
router.post('/auth/reset-password', resetPassword);

module.exports = router;
