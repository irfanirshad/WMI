// import mongoose from 'mongoose';

// const blogSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   slug: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   excerpt: {
//     type: String,
//     required: true,
//   },
//   author: {
//     name: String,
//     image: String,
//   },
//   coverImage: {
//     url: String,
//     alt: String,
//   },
//   tags: [String],
//   category: {
//     type: String,
//     required: true,
//   },
//   publishedAt: {
//     type: Date,
//     default: Date.now,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);