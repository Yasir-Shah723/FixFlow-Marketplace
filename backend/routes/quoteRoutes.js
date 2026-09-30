const express = require('express');
const { getQuotes, createQuote, updateQuoteStatus } = require('../controllers/quoteController');
const { authenticateUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/quotes', authenticateUser, authorizeRoles('customer', 'provider', 'admin'), getQuotes);
router.post('/quotes', authenticateUser, authorizeRoles('provider'), createQuote);
router.patch('/quotes/:id', authenticateUser, authorizeRoles('customer', 'provider', 'admin'), updateQuoteStatus);

module.exports = router;
