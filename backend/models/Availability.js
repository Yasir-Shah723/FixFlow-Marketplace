const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema(
  {
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    monday: { available: { type: Boolean, default: true }, startTime: String, endTime: String },
    tuesday: { available: { type: Boolean, default: true }, startTime: String, endTime: String },
    wednesday: { available: { type: Boolean, default: true }, startTime: String, endTime: String },
    thursday: { available: { type: Boolean, default: true }, startTime: String, endTime: String },
    friday: { available: { type: Boolean, default: true }, startTime: String, endTime: String },
    saturday: { available: { type: Boolean, default: false }, startTime: String, endTime: String },
    sunday: { available: { type: Boolean, default: false }, startTime: String, endTime: String },
    status: { type: String, enum: ['AVAILABLE', 'VACATION', 'BUSY', 'UNAVAILABLE'], default: 'AVAILABLE' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Availability', availabilitySchema);
