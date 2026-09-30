const express = require('express');
const { getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const { authenticateUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/users', authenticateUser, authorizeRoles('admin', 'customer', 'provider'), getUsers);
router.get('/users/:id', authenticateUser, authorizeRoles('admin', 'customer', 'provider'), getUserById);
router.put('/users/:id', authenticateUser, authorizeRoles('admin', 'customer', 'provider'), updateUser);
router.delete('/users/:id', authenticateUser, authorizeRoles('admin'), deleteUser);

module.exports = router;
