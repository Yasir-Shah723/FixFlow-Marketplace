const jwt = require('jsonwebtoken');
const { demoUsers } = require('../seeds/demoData');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const generateToken = (user) =>
  jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'fixflow-demo-secret', {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });

const sanitizeUser = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
  city: user.city,
  location: user.location,
  phone: user.phone,
  avatar: user.avatar,
  bio: user.bio,
  isVerified: user.isVerified,
});

const findUser = (email) => demoUsers.find((user) => user.email.toLowerCase() === email.toLowerCase());

const registerUser = async (req, res) => {
  const { name, email, password, role = 'customer', city } = req.body;

  if (!name || !email || !password) {
    return errorResponse(res, 'Name, email, and password are required.', [], 400);
  }

  if (findUser(email)) {
    return errorResponse(res, 'A user with this email already exists.', [], 400);
  }

  const newUser = { id: `u${Date.now()}`, name, email, password, role, city, avatar: '/images/default-avatar.png' };
  demoUsers.push(newUser);

  const token = generateToken(newUser);
  return successResponse(res, 'User registered successfully.', { token, user: sanitizeUser(newUser) }, 201);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = findUser(email);

  if (!user || user.password !== password) {
    return errorResponse(res, 'Invalid email or password.', [], 401);
  }

  const token = generateToken(user);
  return successResponse(res, 'Login successful.', { token, user: sanitizeUser(user) });
};

const getCurrentUser = async (req, res) => {
  const user = req.user || demoUsers[0];
  return successResponse(res, 'Current user fetched.', { user: sanitizeUser(user) });
};

const updateProfile = async (req, res) => {
  const user = req.user || demoUsers[0];
  const updatedUser = { ...user, ...req.body };
  const index = demoUsers.findIndex((item) => item.id === user.id);
  if (index !== -1) demoUsers[index] = updatedUser;
  return successResponse(res, 'Profile updated successfully.', { user: sanitizeUser(updatedUser) });
};

const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = req.user || demoUsers[0];
  if (user.password !== currentPassword) {
    return errorResponse(res, 'Current password is incorrect.', [], 400);
  }
  user.password = newPassword;
  return successResponse(res, 'Password changed successfully.', {});
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = findUser(email);
  if (!user) {
    return errorResponse(res, 'No account found with this email.', [], 404);
  }
  return successResponse(res, 'Password reset instructions have been sent.', {
    resetToken: 'demo-reset-token',
  });
};

const resetPassword = async (req, res) => {
  const { token, password } = req.body;
  if (!token || !password) {
    return errorResponse(res, 'Reset token and new password are required.', [], 400);
  }
  return successResponse(res, 'Password has been reset successfully.', {});
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  updateProfile,
  changePassword,
  forgotPassword,
  resetPassword,
};
