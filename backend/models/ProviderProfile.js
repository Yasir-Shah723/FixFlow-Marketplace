const mongoose = require('mongoose');

const providerProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    profession: { type: String, required: true },
    experience: { type: Number, default: 3 },
    category: { type: String },
    skills: [{ type: String }],
    serviceAreas: [{ type: String }],
    city: { type: String },
    priceRange: { type: String, default: 'Rs. 2,000+' },
    rating: { type: Number, default: 4.6 },
    reviewsCount: { type: Number, default: 0 },
    completedJobs: { type: Number, default: 0 },
    responseRate: { type: Number, default: 0.92 },
    responseTime: { type: String, default: '15 min' },
    availableToday: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    verifiedStatus: {
      type: String,
      enum: ['NOT_SUBMITTED', 'PENDING', 'VERIFIED', 'REJECTED'],
      default: 'NOT_SUBMITTED',
    },
    bio: { type: String },
    portfolio: [{ type: String }],
    serviceSummary: { type: String },
  },
  { timestamps: true }
);

providerProfileSchema.index({ profession: 1, city: 1 });

module.exports = mongoose.model('ProviderProfile', providerProfileSchema);
