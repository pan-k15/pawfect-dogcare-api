const Laundry = require('../models/Laundry')

// Create a new laundry booking
exports.createLaundry = async (req, res) => {
  try {
    const { dogName, item, quantity, notes } = req.body
    const laundry = new Laundry({ dogName, item, quantity, notes })
    await laundry.save()
    res.status(201).json(laundry)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to create laundry booking' })
  }
}

// Get all laundry bookings (optional: you can add filters)
exports.getAllLaundry = async (req, res) => {
  try {
    const laundries = await Laundry.find().sort({ createdAt: -1 })
    res.json(laundries)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch laundry bookings' })
  }
}
