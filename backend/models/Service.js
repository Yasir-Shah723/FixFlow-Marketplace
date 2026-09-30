const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    price: { type: Number, required: true },
    currency: { type: String, default: 'PKR' },
    isActive: { type: Boolean, default: true },
    serviceArea: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

serviceSchema.index({ category: 1, city: 1 });

module.exports = mongoose.model('Service', serviceSchema);
