const mongoose = require('mongoose')

const dogRunSchema = new mongoose.Schema({
  dogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dog',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  timeSlot: {
    type: String,
    enum: ['Morning', 'Afternoon', 'Evening'],
    required: true
  },
  durationMinutes: {
    type: Number,
    required: true,
    min: 15
  },
  notes: {
    type: String
  },
  cost: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Booked', 'In Progress', 'Completed'],
    default: 'Booked'
  },
  paid: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

module.exports = mongoose.model('DogRun', dogRunSchema)
