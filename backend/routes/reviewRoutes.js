const express = require('express');
const { getReviews, createReview } = require('../controllers/reviewController');
const { authenticateUser } = require('../middleware/auth');

const router = express.Router();

router.get('/reviews', getReviews);
router.post('/reviews', authenticateUser, createReview);

module.exports = router;
