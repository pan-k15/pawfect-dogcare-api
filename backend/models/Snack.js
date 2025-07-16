const mongoose = require('mongoose')

const snackSchema = new mongoose.Schema({
  dogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dog',
    required: true
  },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true, min: 1 },
      unitPrice: { type: Number, required: true, min: 0 }
    }
  ],
  totalCost: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Prepared', 'Delivered'],
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

module.exports = mongoose.model('Snack', snackSchema)
