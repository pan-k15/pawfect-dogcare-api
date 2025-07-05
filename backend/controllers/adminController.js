const Admin = require('../models/Admin')
const User = require('../models/User')
const Booking = require('../models/Bookings')
const Service = require('../models/Service')

// ✅ List all users (without passwords)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password')
    res.json(users)
  } catch (err) {
    console.error('[getAllUsers]', err)
    res.status(500).json({ error: 'Failed to fetch users' })
  }
}

// ✅ List all bookings with user info
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('userId', 'username email')
      .sort('-createdAt')
    res.json(bookings)
  } catch (err) {
    console.error('[getAllBookings]', err)
    res.status(500).json({ error: 'Failed to fetch bookings' })
  }
}

// ✅ Update booking (status, notes, etc.)
exports.updateBooking = async (req, res) => {
  try {
    const { id } = req.params
    const updates = req.body
    const booking = await Booking.findByIdAndUpdate(id, updates, { new: true })
    if (!booking) return res.status(404).json({ error: 'Booking not found' })
    res.json(booking)
  } catch (err) {
    console.error('[updateBooking]', err)
    res.status(500).json({ error: 'Failed to update booking' })
  }
}

// ✅ Delete booking
exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params
    const booking = await Booking.findByIdAndDelete(id)
    if (!booking) return res.status(404).json({ error: 'Booking not found' })
    res.json({ message: 'Booking deleted successfully' })
  } catch (err) {
    console.error('[deleteBooking]', err)
    res.status(500).json({ error: 'Failed to delete booking' })
  }
}

// ✅ Add new service
exports.addService = async (req, res) => {
  try {
    const { name, price } = req.body
    if (!name || price == null) {
      return res.status(400).json({ error: 'Name and price are required' })
    }

    const service = new Service({ name, price })
    await service.save()
    res.status(201).json(service)
  } catch (err) {
    console.error('[addService]', err)
    res.status(500).json({ error: 'Failed to add service' })
  }
}

// ✅ Update service
exports.updateService = async (req, res) => {
  try {
    const { id } = req.params
    const updates = req.body
    const service = await Service.findByIdAndUpdate(id, updates, { new: true })
    if (!service) return res.status(404).json({ error: 'Service not found' })
    res.json(service)
  } catch (err) {
    console.error('[updateService]', err)
    res.status(500).json({ error: 'Failed to update service' })
  }
}

// ✅ Delete service
exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params
    const service = await Service.findByIdAndDelete(id)
    if (!service) return res.status(404).json({ error: 'Service not found' })
    res.json({ message: 'Service deleted successfully' })
  } catch (err) {
    console.error('[deleteService]', err)
    res.status(500).json({ error: 'Failed to delete service' })
  }
}
