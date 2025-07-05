const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { createBooking, getBookings } = require('../controllers/bookingController')

router.post('/', auth, createBooking)
router.get('/', auth, getBookings)

module.exports = router
