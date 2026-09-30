const availability = {
  provider: 'p1',
  monday: { available: true, startTime: '09:00', endTime: '18:00' },
  tuesday: { available: true, startTime: '10:00', endTime: '19:00' },
  wednesday: { available: true, startTime: '09:00', endTime: '18:00' },
  thursday: { available: true, startTime: '10:00', endTime: '19:00' },
  friday: { available: true, startTime: '09:00', endTime: '17:00' },
  saturday: { available: false },
  sunday: { available: false },
};

const { successResponse } = require('../utils/apiResponse');

const getAvailability = async (req, res) => {
  return successResponse(res, 'Availability fetched successfully.', { availability });
};

const updateAvailability = async (req, res) => {
  Object.assign(availability, req.body);
  return successResponse(res, 'Availability updated successfully.', { availability });
};

module.exports = { getAvailability, updateAvailability };
