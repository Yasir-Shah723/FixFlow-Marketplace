const { demoProviders, demoServices } = require('../seeds/demoData');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getProviders = (req, res) => {
  return successResponse(res, 'Providers fetched successfully.', { providers: demoProviders });
};

const getProviderById = (req, res) => {
  const provider = demoProviders.find((item) => item.id === req.params.id);
  if (!provider) return errorResponse(res, 'Provider not found.', [], 404);
  return successResponse(res, 'Provider fetched successfully.', { provider, services: demoServices.filter((service) => service.providerId === provider.id) });
};

const createProviderProfile = (req, res) => {
  const profile = { id: `p${Date.now()}`, ...req.body };
  demoProviders.push(profile);
  return successResponse(res, 'Provider profile created successfully.', { profile }, 201);
};

module.exports = { getProviders, getProviderById, createProviderProfile };
