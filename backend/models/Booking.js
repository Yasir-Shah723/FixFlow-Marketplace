const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    request: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceRequest' },
    service: { type: String, required: true },
    date: { type: String },
    time: { type: String },
    location: { type: String },
    price: { type: Number, required: true },
    status: {
      type: String,
      enum: ['NEW', 'UPCOMING', 'ACTIVE', 'COMPLETED', 'CANCELLED'],
      default: 'NEW',
    },
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
