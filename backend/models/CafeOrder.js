const mongoose = require('mongoose')

const cafeOrderSchema = new mongoose.Schema({
  dogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dog',
    required: true,
  },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true, min: 1 },
      unitPrice: { type: Number, required: true, min: 0 }
    }
  ],
  notes: { type: String },
  totalCost: { type: Number, required: true },
  status: {
    type: String,
    enum: ['Pending', 'Preparing', 'Ready', 'Delivered'],
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

module.exports = mongoose.model('CafeOrder', cafeOrderSchema)
