const Snack = require('../models/Snack')

exports.createSnackOrder = async (req, res) => {
  try {
    const { dogId, items } = req.body

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Snack items are required' })
    }

    // Calculate total cost
    const totalCost = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)

    const order = new Snack({ dogId, items, totalCost })
    await order.save()
    res.status(201).json(order)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to create snack order' })
  }
}

exports.getSnacksByDog = async (req, res) => {
  try {
    const { dogId } = req.params
    const snacks = await Snack.find({ dogId })
    res.json(snacks)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch snacks' })
  }
}

exports.getAllSnacks = async (req, res) => {
  try {
    const snacks = await Snack.find().populate('dogId', 'name breed')
    res.json(snacks)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch snack orders' })
  }
}

exports.updateSnackStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { status, paid } = req.body

    const updated = await Snack.findByIdAndUpdate(
      id,
      { status, paid },
      { new: true }
    )

    if (!updated) return res.status(404).json({ error: 'Snack order not found' })

    res.json(updated)
  } catch (err) {
    res.status(500).json({ error: 'Failed to update snack order' })
  }
}
