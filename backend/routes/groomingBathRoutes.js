const express = require('express')
const router = express.Router()
const groomingBathController = require('../controllers/groomingBathController')

// POST - Book an appointment
router.post('/', groomingBathController.createAppointment)

// GET - All appointments
router.get('/', groomingBathController.getAllAppointments)

// GET - Single appointment by ID
router.get('/:id', groomingBathController.getAppointmentById)

// PATCH - Update appointment (status, paid, etc.)
router.patch('/:id', groomingBathController.updateAppointment)

// DELETE - Remove appointment
router.delete('/:id', groomingBathController.deleteAppointment)

module.exports = router
