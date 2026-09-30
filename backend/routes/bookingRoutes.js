const express = require('express');
const { getBookings, createBooking, updateBookingStatus } = require('../controllers/bookingController');
const { authenticateUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/bookings', authenticateUser, authorizeRoles('customer', 'provider', 'admin'), getBookings);
router.post('/bookings', authenticateUser, authorizeRoles('customer', 'provider'), createBooking);
router.patch('/bookings/:id', authenticateUser, authorizeRoles('customer', 'provider', 'admin'), updateBookingStatus);

module.exports = router;
