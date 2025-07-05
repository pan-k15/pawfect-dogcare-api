const express = require('express')
const router = express.Router()
const adminAuth = require('../middleware/adminAuth')

const {
  getAllUsers,
  getAllBookings,
  updateBooking,
  deleteBooking,
  addService,
  updateService,
  deleteService,
} = require('../controllers/adminController')

// Users
router.get('/users', adminAuth, getAllUsers)

// Bookings
router.get('/bookings', adminAuth, getAllBookings)
router.put('/bookings/:id', adminAuth, updateBooking)
router.delete('/bookings/:id', adminAuth, deleteBooking)

// Services
router.post('/services', adminAuth, addService)
router.put('/services/:id', adminAuth, updateService)
router.delete('/services/:id', adminAuth, deleteService)

module.exports = router
