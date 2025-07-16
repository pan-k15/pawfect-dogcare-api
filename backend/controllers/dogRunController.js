const DogRun = require('../models/DogRun')

// Create Dog Run booking
exports.createDogRun = async (req, res) => {
  try {
    const { dogId, date, timeSlot, durationMinutes, notes, cost } = req.body
    const newRun = new DogRun({ dogId, date, timeSlot, durationMinutes, notes, cost })
    await newRun.save()
    res.status(201).json(newRun)
  } catch (err) {
    res.status(500).json({ error: 'Failed to create dog run booking' })
  }
}

// Get all Dog Run bookings (admin)
exports.getAllDogRuns = async (req, res) => {
  try {
    const runs = await DogRun.find().populate('dogId', 'name breed')
    res.json(runs)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch dog runs' })
  }
}

// Get Dog Runs by Dog ID (for member)
exports.getRunsByDog = async (req, res) => {
  try {
    const { dogId } = req.params
    const runs = await DogRun.find({ dogId })
    res.json(runs)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch dog runs for this dog' })
  }
}

// Update Dog Run status or payment
exports.updateDogRun = async (req, res) => {
  try {
    const { id } = req.params
    const updates = req.body
    const run = await DogRun.findByIdAndUpdate(id, updates, { new: true })
    if (!run) return res.status(404).json({ error: 'Dog run not found' })
    res.json(run)
  } catch (err) {
    res.status(500).json({ error: 'Failed to update dog run' })
  }
}

// Delete a Dog Run
exports.deleteDogRun = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await DogRun.findByIdAndDelete(id)
    if (!deleted) return res.status(404).json({ error: 'Dog run not found' })
    res.json({ message: 'Dog run deleted' })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete dog run' })
  }
}
