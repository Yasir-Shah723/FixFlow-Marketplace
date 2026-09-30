const express = require('express');
const { getAvailability, updateAvailability } = require('../controllers/availabilityController');
const { authenticateUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/availability', getAvailability);
router.put('/availability', authenticateUser, authorizeRoles('provider', 'admin'), updateAvailability);

module.exports = router;
