const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: String,
  age: Number,
  weight: Number,
  notes: String,
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Dog', dogSchema)
