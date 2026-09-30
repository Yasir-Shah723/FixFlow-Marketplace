const { demoQuotes } = require('../seeds/demoData');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getQuotes = async (req, res) => {
  return successResponse(res, 'Quotes fetched successfully.', { quotes: demoQuotes });
};

const createQuote = async (req, res) => {
  const quote = { id: `q${Date.now()}`, ...req.body, status: 'PENDING' };
  demoQuotes.push(quote);
  return successResponse(res, 'Quote created successfully.', { quote }, 201);
};

const updateQuoteStatus = async (req, res) => {
  const quote = demoQuotes.find((item) => item.id === req.params.id);
  if (!quote) return errorResponse(res, 'Quote not found.', [], 404);
  quote.status = req.body.status || quote.status;
  return successResponse(res, 'Quote status updated successfully.', { quote });
};

module.exports = { getQuotes, createQuote, updateQuoteStatus };
