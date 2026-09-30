const express = require('express');
const { getServices, getServiceById, createService, getCategories, getCategoryBySlug } = require('../controllers/serviceController');
const { authenticateUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/services', getServices);
router.get('/services/:id', getServiceById);
router.get('/categories', getCategories);
router.get('/categories/:slug', getCategoryBySlug);
router.post('/services', authenticateUser, authorizeRoles('provider', 'admin'), createService);

module.exports = router;
