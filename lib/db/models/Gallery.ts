import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['medical', 'industrial'],
  },
  imageUrl: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Gallery || mongoose.model('Gallery', gallerySchema);