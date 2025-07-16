const CafeOrder = require('../models/CafeOrder')

// Create a cafe order
exports.createCafeOrder = async (req, res) => {
  try {
    const { dogId, items, notes, totalCost } = req.body

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'No items provided' })
    }

    const newOrder = new CafeOrder({ dogId, items, notes, totalCost })
    await newOrder.save()
    res.status(201).json(newOrder)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to create cafe order' })
  }
}

// Get all cafe orders (admin)
exports.getAllCafeOrders = async (req, res) => {
  try {
    const orders = await CafeOrder.find().populate('dogId', 'name breed')
    res.json(orders)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cafe orders' })
  }
}

// Get orders by dog
exports.getCafeOrdersByDog = async (req, res) => {
  try {
    const { dogId } = req.params
    const orders = await CafeOrder.find({ dogId })
    res.json(orders)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch dog orders' })
  }
}

// Update order status or payment
exports.updateCafeOrder = async (req, res) => {
  try {
    const { id } = req.params
    const updated = await CafeOrder.findByIdAndUpdate(id, req.body, { new: true })
    res.json(updated)
  } catch (err) {
    res.status(500).json({ error: 'Failed to update order' })
  }
}
