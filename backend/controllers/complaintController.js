const { successResponse, errorResponse } = require('../utils/apiResponse');

const complaints = [
  { id: 'c1', user: 'u1', booking: 'b1', reason: 'Service quality', description: 'The technician arrived late and the issue was not fully resolved.', status: 'OPEN' },
];

const getComplaints = async (req, res) => {
  return successResponse(res, 'Complaints fetched successfully.', { complaints });
};

const createComplaint = async (req, res) => {
  const complaint = { id: `c${Date.now()}`, ...req.body, status: 'OPEN' };
  complaints.push(complaint);
  return successResponse(res, 'Complaint submitted successfully.', { complaint }, 201);
};

const updateComplaintStatus = async (req, res) => {
  const complaint = complaints.find((item) => item.id === req.params.id);
  if (!complaint) return errorResponse(res, 'Complaint not found.', [], 404);
  complaint.status = req.body.status || complaint.status;
  return successResponse(res, 'Complaint status updated successfully.', { complaint });
};

module.exports = { getComplaints, createComplaint, updateComplaintStatus };
