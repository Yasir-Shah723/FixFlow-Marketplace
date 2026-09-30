const { successResponse } = require('../utils/apiResponse');

const transactions = [
  { id: 't1', user: 'u1', provider: 'p1', amount: 3200, currency: 'PKR', status: 'PAID', type: 'EARNINGS' },
  { id: 't2', user: 'u2', provider: 'p1', amount: 2500, currency: 'PKR', status: 'PAID', type: 'PAYOUT' },
];

const getTransactions = async (req, res) => {
  return successResponse(res, 'Transactions fetched successfully.', { transactions });
};

module.exports = { getTransactions };
