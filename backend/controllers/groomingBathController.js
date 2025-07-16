const GroomingBath = require('../models/GroomingBath')

// Create a grooming/bath appointment
exports.createAppointment = async (req, res) => {
  try {
    const { dogName, services, notes, cost, status, paid } = req.body

    const appointment = new GroomingBath({
      dogName,
      services,
      notes,
      cost,
      status,
      paid
    })

    await appointment.save()
    res.status(201).json(appointment)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to create appointment' })
  }
}

// Get all grooming appointments
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await GroomingBath.find()
    res.json(appointments)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch appointments' })
  }
}

// Get appointment by ID
exports.getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params
    const appointment = await GroomingBath.findById(id)
    if (!appointment) return res.status(404).json({ error: 'Appointment not found' })
    res.json(appointment)
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving appointment' })
  }
}

// Update status or paid
exports.updateAppointment = async (req, res) => {
  try {
    const { id } = req.params
    const updates = req.body
    const appointment = await GroomingBath.findByIdAndUpdate(id, updates, { new: true })
    if (!appointment) return res.status(404).json({ error: 'Appointment not found' })
    res.json(appointment)
  } catch (err) {
    res.status(500).json({ error: 'Failed to update appointment' })
  }
}

// Delete appointment
exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params
    const result = await GroomingBath.findByIdAndDelete(id)
    if (!result) return res.status(404).json({ error: 'Appointment not found' })
    res.json({ message: 'Appointment deleted' })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete appointment' })
  }
}
