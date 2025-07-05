import Booking from '../models/Bookings.js'

export async function createBooking(req, res) {
  try {
    const { service, dogName, date } = req.body
    const userId = req.user.id

    if (!service || !dogName || !date) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const booking = await Booking.create({ userId, service, dogName, date })
    res.status(201).json(booking)
  } catch (err) {
    console.error('[createBooking]', err)
    res.status(500).json({ error: 'Failed to create booking' })
  }
}

export async function getBookings(req, res) {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).sort('-createdAt')
    res.json(bookings)
  } catch (err) {
    console.error('[getBookings]', err)
    res.status(500).json({ error: 'Failed to fetch bookings' })
  }
}
