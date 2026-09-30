const express = require('express');
const { getProviders, getProviderById, createProviderProfile } = require('../controllers/providerController');
const { authenticateUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/providers', getProviders);
router.get('/providers/:id', getProviderById);
router.post('/providers', authenticateUser, authorizeRoles('provider', 'admin'), createProviderProfile);

module.exports = router;
