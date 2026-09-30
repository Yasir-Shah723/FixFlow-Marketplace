const { serviceCategories } = require('../seeds/demoData');
const { successResponse } = require('../utils/apiResponse');

const getCategories = async (req, res) => {
  return successResponse(res, 'Categories fetched successfully.', { categories: serviceCategories });
};

module.exports = { getCategories };
