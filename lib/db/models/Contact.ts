import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  company: String,
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['general', 'support', 'sales', 'career'],
    default: 'general',
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'resolved'],
    default: 'new',
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

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);