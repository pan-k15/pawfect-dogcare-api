const express = require('express')
const router = express.Router()
const dogRunController = require('../controllers/dogRunController')
const auth = require('../middleware/auth')

// 🐶 Member Routes
router.post('/', auth, dogRunController.createDogRun)
router.get('/dog/:dogId', auth, dogRunController.getRunsByDog)

// 🔒 Admin Routes
router.get('/', auth, dogRunController.getAllDogRuns)
router.put('/:id', auth, dogRunController.updateDogRun)
router.delete('/:id', auth, dogRunController.deleteDogRun)

module.exports = router
