const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema(
  {
    request: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceRequest', required: true },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    estimatedPrice: { type: Number, required: true },
    estimatedDuration: { type: String },
    message: { type: String },
    includedServices: [{ type: String }],
    additionalCharges: { type: Number, default: 0 },
    validUntil: { type: Date },
    status: { type: String, enum: ['PENDING', 'ACCEPTED', 'REJECTED'], default: 'PENDING' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Quote', quoteSchema);
