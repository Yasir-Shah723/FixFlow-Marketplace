const { serviceCategories, demoServices } = require('../seeds/demoData');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getCategories = async (req, res) => {
  return successResponse(res, 'Categories fetched successfully.', { categories: serviceCategories });
};

const getCategoryBySlug = async (req, res) => {
  const category = serviceCategories.find((item) => item.slug === req.params.slug);
  if (!category) return errorResponse(res, 'Category not found.', [], 404);
  return successResponse(res, 'Category fetched successfully.', { category });
};

const getServices = async (req, res) => {
  const services = demoServices.map((service) => ({
    ...service,
    categoryTitle: serviceCategories.find((cat) => cat.slug === service.category)?.title || service.category,
  }));
  return successResponse(res, 'Services fetched successfully.', { services });
};

const getServiceById = async (req, res) => {
  const service = demoServices.find((item) => item.id === req.params.id);
  if (!service) return errorResponse(res, 'Service not found.', [], 404);
  return successResponse(res, 'Service fetched successfully.', { service });
};

const createService = async (req, res) => {
  const payload = req.body;
  const service = {
    id: `s${Date.now()}`,
    title: payload.title,
    category: payload.category,
    price: Number(payload.price) || 0,
    providerId: payload.providerId,
    city: payload.city,
  };
  demoServices.push(service);
  return successResponse(res, 'Service created successfully.', { service }, 201);
};

module.exports = { getCategories, getCategoryBySlug, getServices, getServiceById, createService };
