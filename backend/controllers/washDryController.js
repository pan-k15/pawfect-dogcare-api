const WashDry = require('../models/WashDry')

// Create new Wash & Dry booking
exports.createWashDry = async (req, res) => {
  try {
    const { dogId, items, date, notes, cost, paid } = req.body
    const booking = new WashDry({ dogId, items, date, notes, cost, paid })
    await booking.save()
    res.status(201).json(booking)
  } catch (err) {
    console.error('Create WashDry error:', err)
    res.status(500).json({ error: 'Failed to create Wash & Dry booking' })
  }
}

// Get all Wash & Dry bookings
exports.getAllWashDry = async (req, res) => {
  try {
    const bookings = await WashDry.find().populate('dogId', 'name breed')
    res.json(bookings)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch Wash & Dry bookings' })
  }
}

// Get bookings by dogId (owner view)
exports.getWashDryByDog = async (req, res) => {
  try {
    const { dogId } = req.params
    const bookings = await WashDry.find({ dogId }).sort({ date: -1 })
    res.json(bookings)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bookings for this dog' })
  }
}
