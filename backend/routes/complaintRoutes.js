const express = require('express');
const { getComplaints, createComplaint, updateComplaintStatus } = require('../controllers/complaintController');
const { authenticateUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/complaints', authenticateUser, authorizeRoles('admin', 'customer'), getComplaints);
router.post('/complaints', authenticateUser, createComplaint);
router.patch('/complaints/:id', authenticateUser, authorizeRoles('admin'), updateComplaintStatus);

module.exports = router;
