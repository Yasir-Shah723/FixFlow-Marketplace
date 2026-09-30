const { demoUsers } = require('../seeds/demoData');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getUsers = async (req, res) => {
  return successResponse(res, 'Users retrieved successfully.', { users: demoUsers });
};

const getUserById = async (req, res) => {
  const item = demoUsers.find((user) => user.id === req.params.id);
  if (!item) return errorResponse(res, 'User not found.', [], 404);
  return successResponse(res, 'User fetched successfully.', { user: item });
};

const updateUser = async (req, res) => {
  const index = demoUsers.findIndex((user) => user.id === req.params.id);
  if (index === -1) return errorResponse(res, 'User not found.', [], 404);
  demoUsers[index] = { ...demoUsers[index], ...req.body };
  return successResponse(res, 'User updated successfully.', { user: demoUsers[index] });
};

const deleteUser = async (req, res) => {
  const index = demoUsers.findIndex((user) => user.id === req.params.id);
  if (index === -1) return errorResponse(res, 'User not found.', [], 404);
  demoUsers.splice(index, 1);
  return successResponse(res, 'User deleted successfully.', {});
};

module.exports = { getUsers, getUserById, updateUser, deleteUser };
