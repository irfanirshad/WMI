// import mongoose from 'mongoose';

// const careerSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   department: {
//     type: String,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     enum: ['full-time', 'part-time', 'contract'],
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   requirements: [String],
//   responsibilities: [String],
//   isActive: {
//     type: Boolean,
//     default: true,
//   },
//   applicationDeadline: Date,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.models.Career || mongoose.model('Career', careerSchema);