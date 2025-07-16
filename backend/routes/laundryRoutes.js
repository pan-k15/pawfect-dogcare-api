const express = require('express')
const router = express.Router()
const {
  createLaundry,
  getAllLaundry,
} = require('../controllers/laundryController')

// POST /api/laundry - create laundry booking
router.post('/', createLaundry)

// GET /api/laundry - get all laundry bookings
router.get('/', getAllLaundry)

module.exports = router
