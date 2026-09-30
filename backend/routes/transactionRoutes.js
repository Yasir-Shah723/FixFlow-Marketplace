const express = require('express');
const { getTransactions } = require('../controllers/transactionController');
const { authenticateUser } = require('../middleware/auth');

const router = express.Router();

router.get('/transactions', authenticateUser, getTransactions);

module.exports = router;
