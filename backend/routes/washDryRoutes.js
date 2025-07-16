const express = require('express')
const router = express.Router()
const washDryController = require('../controllers/washDryController')
const auth = require('../middleware/auth')

// POST /api/wash-dry
router.post('/', auth, washDryController.createWashDry)

// GET /api/wash-dry
router.get('/', auth, washDryController.getAllWashDry)

// GET /api/wash-dry/dog/:dogId
router.get('/dog/:dogId', auth, washDryController.getWashDryByDog)

module.exports = router
