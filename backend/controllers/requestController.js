const { demoRequests, demoProviders } = require('../seeds/demoData');
const { calculateProviderMatchScores } = require('../services/matchService');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getRequests = async (req, res) => {
  return successResponse(res, 'Service requests fetched successfully.', { requests: demoRequests });
};

const createRequest = async (req, res) => {
  const payload = req.body;
  const request = {
    id: `r${Date.now()}`,
    customer: req.user?.id || 'u1',
    category: payload.category,
    specificService: payload.specificService,
    problemDescription: payload.problemDescription,
    preferredDate: payload.preferredDate,
    preferredTime: payload.preferredTime,
    location: payload.location,
    budgetRange: payload.budgetRange,
    urgency: payload.urgency || 'Normal',
    images: payload.images || [],
    status: 'MATCHING',
    matchScore: 0,
  };

  const matches = calculateProviderMatchScores(demoProviders, request);
  request.matchScore = matches[0]?.matchScore || 86;
  request.providerMatches = matches.map((item) => item.id);
  demoRequests.push(request);

  return successResponse(res, 'Service request created successfully.', { request, matches }, 201);
};

const updateRequestStatus = async (req, res) => {
  const request = demoRequests.find((item) => item.id === req.params.id);
  if (!request) return errorResponse(res, 'Request not found.', [], 404);
  request.status = req.body.status || request.status;
  return successResponse(res, 'Request status updated successfully.', { request });
};

module.exports = { getRequests, createRequest, updateRequestStatus };
