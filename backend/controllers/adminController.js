const { demoUsers, demoProviders, demoRequests, demoBookings, demoNotifications } = require('../seeds/demoData');
const { successResponse } = require('../utils/apiResponse');

const getDashboardStats = async (req, res) => {
  const stats = {
    totalUsers: demoUsers.length,
    customers: demoUsers.filter((user) => user.role === 'customer').length,
    providers: demoProviders.length,
    verifiedProviders: demoProviders.filter((provider) => provider.verified).length,
    bookings: demoBookings.length,
    revenueVolume: 198450,
    completedJobs: 108,
    openComplaints: 4,
  };

  return successResponse(res, 'Admin dashboard stats fetched successfully.', { stats });
};

const getAnalytics = async (req, res) => {
  return successResponse(res, 'Admin analytics ready.', {
    usersGrowth: [12, 19, 25, 28, 33, 41],
    bookings: [12, 18, 21, 23, 26, 28],
    categories: [
      { name: 'AC & HVAC', value: 28 },
      { name: 'Electrical', value: 19 },
      { name: 'Plumbing', value: 17 },
      { name: 'Cleaning', value: 14 },
    ],
    providerPerformance: [
      { name: 'Ali Cooling Services', score: 96 },
      { name: 'Lahore Plumbing Co.', score: 94 },
      { name: 'Karachi Electric Works', score: 90 },
    ],
  });
};

const getNotifications = async (req, res) => {
  return successResponse(res, 'Admin notifications fetched successfully.', { notifications: demoNotifications });
};

module.exports = { getDashboardStats, getAnalytics, getNotifications };
