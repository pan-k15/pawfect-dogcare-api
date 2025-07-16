const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
    fname: {
    type: String,
    required: true
  },
    lname: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  membershipLevel: {
    type: String,
    enum: ['Basic', 'Premium', 'VIP'],
    default: 'Basic'
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model('Member', memberSchema)
