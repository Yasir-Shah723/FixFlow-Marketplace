const { demoProviders } = require('../seeds/demoData');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getFavorites = async (req, res) => {
  const userId = req.user?.id || 'u1';
  const favorites = demoProviders.slice(0, 2).map((provider) => ({ userId, providerId: provider.id, provider }));
  return successResponse(res, 'Favorites fetched successfully.', { favorites });
};

const toggleFavorite = async (req, res) => {
  const provider = demoProviders.find((item) => item.id === req.params.providerId);
  if (!provider) return errorResponse(res, 'Provider not found.', [], 404);
  return successResponse(res, 'Favorite status updated successfully.', { providerId: provider.id, saved: true });
};

module.exports = { getFavorites, toggleFavorite };
