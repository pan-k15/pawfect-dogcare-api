const mongoose = require('mongoose')

const groomingBathSchema = new mongoose.Schema({
  dogName: { type: String, required: true },
  services: {
    type: [String],
    enum: ['Haircut', 'Bath Only', 'Nail Clipping', 'Ear Cleaning', 'De-shedding', 'Flea Treatment', 'Others'],
    required: true,
  },
  notes: { type: String },
  cost: { type: Number, required: true },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending'
  },
  paid: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('GroomingBath', groomingBathSchema)
