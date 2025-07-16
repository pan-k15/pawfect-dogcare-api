const express = require('express')
const router = express.Router()
const cafeController = require('../controllers/cafeController')

// POST /api/cafe
router.post('/', cafeController.createCafeOrder)

// GET /api/cafe
router.get('/', cafeController.getAllCafeOrders)

// GET /api/cafe/dog/:dogId
router.get('/dog/:dogId', cafeController.getCafeOrdersByDog)

// PUT /api/cafe/:id
router.put('/:id', cafeController.updateCafeOrder)

module.exports = router
