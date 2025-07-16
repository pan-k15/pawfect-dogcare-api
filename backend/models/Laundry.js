const mongoose = require('mongoose')

const laundrySchema = new mongoose.Schema({
  dogName: { type: String, required: true },

  items: [
    {
      item: {
        type: String,
        enum: ['Dog Clothes', 'Dog Bed', 'Towel', 'Blanket', 'Others'],
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      cost: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],

  notes: { type: String },

  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
  paid: {
    type: Boolean,
    default: false,
  },

  totalCost: {
    type: Number,
    default: 0,
    min: 0,
  },

  createdAt: { type: Date, default: Date.now },
})

// 🧮 Automatically calculate totalCost before saving
laundrySchema.pre('save', function (next) {
  this.totalCost = this.items.reduce((sum, item) => {
    return sum + item.quantity * item.cost
  }, 0)
  next()
})

module.exports = mongoose.model('Laundry', laundrySchema)
