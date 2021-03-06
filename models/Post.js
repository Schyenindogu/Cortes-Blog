const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const PostSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      username: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  text: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

module.exports = Post = mongoose.model('posts',
PostSchema)