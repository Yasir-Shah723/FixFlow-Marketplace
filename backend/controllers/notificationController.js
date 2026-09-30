const { demoNotifications } = require('../seeds/demoData');
const { successResponse } = require('../utils/apiResponse');

const getNotifications = async (req, res) => {
  return successResponse(res, 'Notifications fetched successfully.', { notifications: demoNotifications });
};

const markAsRead = async (req, res) => {
  const item = demoNotifications.find((notification) => notification.id === req.params.id);
  if (item) item.read = true;
  return successResponse(res, 'Notification marked as read.', { notificationId: req.params.id });
};

const markAllAsRead = async (req, res) => {
  demoNotifications.forEach((item) => { item.read = true; });
  return successResponse(res, 'All notifications marked as read.', {});
};

module.exports = { getNotifications, markAsRead, markAllAsRead };
