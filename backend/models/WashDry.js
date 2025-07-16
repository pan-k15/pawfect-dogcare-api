const mongoose = require('mongoose')

const washDrySchema = new mongoose.Schema({
  dogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dog',
    required: true,
  },
  items: [
    {
      type: String,
      enum: ['Shampoo Wash', 'Conditioning', 'Blow Dry', 'Ear Cleaning', 'Deodorizer'],
      required: true,
    }
  ],
  date: {
    type: Date,
    required: true,
  },
  notes: String,
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending'
  },
  cost: {
    type: Number,
    required: true,
  },
  paid: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

module.exports = mongoose.model('WashDry', washDrySchema)
