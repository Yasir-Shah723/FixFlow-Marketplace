require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
  })
);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api/v1/health', (req, res) => {
  res.json({ success: true, message: 'FixFlow API is healthy.', data: { status: 'ok' } });
});

const routeFiles = [
  './routes/authRoutes',
  './routes/userRoutes',
  './routes/serviceRoutes',
  './routes/categoryRoutes',
  './routes/providerRoutes',
  './routes/requestRoutes',
  './routes/quoteRoutes',
  './routes/bookingRoutes',
  './routes/availabilityRoutes',
  './routes/messageRoutes',
  './routes/reviewRoutes',
  './routes/favoriteRoutes',
  './routes/notificationRoutes',
  './routes/complaintRoutes',
  './routes/adminRoutes',
  './routes/transactionRoutes',
];

routeFiles.forEach((file) => {
  const router = require(file);
  app.use('/api/v1', router);
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
