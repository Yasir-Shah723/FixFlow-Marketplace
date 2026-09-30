const mongoose = require('mongoose');

const serviceCategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    icon: { type: String, default: 'Wrench' },
    featured: { type: Boolean, default: false },
    serviceCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ServiceCategory', serviceCategorySchema);
