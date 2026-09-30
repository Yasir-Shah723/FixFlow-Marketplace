const { demoBookings } = require('../seeds/demoData');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getBookings = async (req, res) => {
  return successResponse(res, 'Bookings fetched successfully.', { bookings: demoBookings });
};

const createBooking = async (req, res) => {
  const booking = { id: `b${Date.now()}`, ...req.body, status: 'UPCOMING' };
  demoBookings.push(booking);
  return successResponse(res, 'Booking created successfully.', { booking }, 201);
};

const updateBookingStatus = async (req, res) => {
  const booking = demoBookings.find((item) => item.id === req.params.id);
  if (!booking) return errorResponse(res, 'Booking not found.', [], 404);
  booking.status = req.body.status || booking.status;
  return successResponse(res, 'Booking status updated successfully.', { booking });
};

module.exports = { getBookings, createBooking, updateBookingStatus };
