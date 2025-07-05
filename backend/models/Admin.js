const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // you can add more admin-specific fields here if needed
})

module.exports = mongoose.model('Admin', adminSchema)
