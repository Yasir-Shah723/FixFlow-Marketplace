const express = require('express');
const { getRequests, createRequest, updateRequestStatus } = require('../controllers/requestController');
const { authenticateUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/requests', authenticateUser, authorizeRoles('customer', 'provider', 'admin'), getRequests);
router.post('/requests', authenticateUser, authorizeRoles('customer'), createRequest);
router.patch('/requests/:id', authenticateUser, authorizeRoles('customer', 'provider', 'admin'), updateRequestStatus);

module.exports = router;
