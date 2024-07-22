import mongoose from "mongoose";
const Posts = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  avatar: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
}, {collection: 'posts'});
 const Post = mongoose.model('Posts', Posts);
 export default Post;