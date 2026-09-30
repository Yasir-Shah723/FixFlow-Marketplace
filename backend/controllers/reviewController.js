const { demoReviews } = require('../seeds/demoData');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getReviews = async (req, res) => {
  return successResponse(res, 'Reviews fetched successfully.', { reviews: demoReviews });
};

const createReview = async (req, res) => {
  const existing = demoReviews.find((review) => review.bookingId === req.body.bookingId);
  if (existing) return errorResponse(res, 'A review already exists for this booking.', [], 400);

  const review = { id: `rv${Date.now()}`, ...req.body };
  demoReviews.push(review);
  return successResponse(res, 'Review submitted successfully.', { review }, 201);
};

module.exports = { getReviews, createReview };
