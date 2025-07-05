const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const admin = await Admin.findById(decoded._id)
    if (!admin) {
      return res.status(403).json({ error: 'Forbidden: Admins only' })
    }
    req.admin = admin
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}
