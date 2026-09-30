const mongoose = require('mongoose');

const requestStatus = [
  'REQUESTED',
  'MATCHING',
  'QUOTES_RECEIVED',
  'PROVIDER_SELECTED',
  'SCHEDULED',
  'ON_THE_WAY',
  'WORK_STARTED',
  'WORK_COMPLETED',
  'CANCELLED',
];

const serviceRequestSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: true },
    specificService: { type: String },
    problemDescription: { type: String, required: true },
    preferredDate: { type: Date },
    preferredTime: { type: String },
    location: { type: String, required: true },
    budgetRange: { type: String },
    urgency: { type: String, enum: ['Normal', 'Soon', 'Urgent'], default: 'Normal' },
    images: [{ type: String }],
    status: { type: String, enum: requestStatus, default: 'REQUESTED' },
    matchScore: { type: Number, default: 0 },
    providerMatches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    quoteCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);
