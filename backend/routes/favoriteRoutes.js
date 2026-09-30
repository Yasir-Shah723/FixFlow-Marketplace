const express = require('express');
const { getFavorites, toggleFavorite } = require('../controllers/favoriteController');
const { authenticateUser } = require('../middleware/auth');

const router = express.Router();

router.get('/favorites', authenticateUser, getFavorites);
router.post('/favorites/:providerId', authenticateUser, toggleFavorite);

module.exports = router;
