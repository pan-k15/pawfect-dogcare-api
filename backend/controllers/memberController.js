const Member = require('../models/Member')

// Create new member
exports.createMember = async (req, res) => {
  try {
    const { userId, membershipLevel, isActive } = req.body

    // Check if member already exists for this user
    const existing = await Member.findOne({ userId })
    if (existing) return res.status(400).json({ error: 'Member already exists for this user' })

    const member = new Member({ userId, membershipLevel, isActive })
    await member.save()
    res.status(201).json(member)
  } catch (err) {
    res.status(500).json({ error: 'Failed to create member' })
  }
}

// Get all members
exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find().populate('userId', 'username email')
    res.json(members)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch members' })
  }
}

// Get member by user ID
exports.getMemberByUser = async (req, res) => {
  try {
    const { userId } = req.params
    const member = await Member.findOne({ userId }).populate('userId', 'username email')
    if (!member) return res.status(404).json({ error: 'Member not found' })
    res.json(member)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch member' })
  }
}

// Update a member
exports.updateMember = async (req, res) => {
  try {
    const { userId } = req.params
    const updates = req.body
    const member = await Member.findOneAndUpdate({ userId }, updates, { new: true })
    if (!member) return res.status(404).json({ error: 'Member not found' })
    res.json(member)
  } catch (err) {
    res.status(500).json({ error: 'Failed to update member' })
  }
}

// Delete a member
exports.deleteMember = async (req, res) => {
  try {
    const { userId } = req.params
    const result = await Member.findOneAndDelete({ userId })
    if (!result) return res.status(404).json({ error: 'Member not found' })
    res.json({ message: 'Member deleted' })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete member' })
  }
}
