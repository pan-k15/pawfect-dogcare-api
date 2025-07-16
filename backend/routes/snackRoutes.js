const express = require('express')
const router = express.Router()
const snackController = require('../controllers/snackController')
const auth = require('../middleware/auth')

// Protected routes
router.post('/', auth, snackController.createSnackOrder)
router.get('/dog/:dogId', auth, snackController.getSnacksByDog)
router.get('/', auth, snackController.getAllSnacks)
router.put('/:id', auth, snackController.updateSnackStatus)

module.exports = router
