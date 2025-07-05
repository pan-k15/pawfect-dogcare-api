const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const hashed = await bcrypt.hash(password, 10)
    const user = await User.create({ username, email, password: hashed })
    res.json({ message: 'Registered successfully' })
  } catch (err) {
    res.status(400).json({ error: 'Email already in use' })
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(404).json({ error: 'User not found' })

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(401).json({ error: 'Incorrect password' })

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  res.json({ token, username: user.username })
}
