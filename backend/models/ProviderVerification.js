const mongoose = require('mongoose');

const providerVerificationSchema = new mongoose.Schema(
  {
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
      type: String,
      enum: ['NOT_SUBMITTED', 'PENDING', 'VERIFIED', 'REJECTED'],
      default: 'NOT_SUBMITTED',
    },
    experience: { type: String },
    certifications: [{ type: String }],
    businessInfo: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ProviderVerification', providerVerificationSchema);
