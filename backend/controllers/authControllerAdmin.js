const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.registerAdmin = async (req, res) => {
  const { username, email, password } = req.body
  try {
    let admin = await Admin.findOne({ email })
    if (admin) return res.status(400).json({ error: 'Email already in use' })

    const hashedPassword = await bcrypt.hash(password, 10)
    admin = new Admin({ username, email, password: hashedPassword })

    await admin.save()

    const token = jwt.sign({ _id: admin._id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.json({ token })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body
  try {
    const admin = await Admin.findOne({ email })
    if (!admin) return res.status(400).json({ error: 'Admin not found' })

    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' })

    const token = jwt.sign({ _id: admin._id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.json({ token })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}
