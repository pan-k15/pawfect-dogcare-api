// middleware/auth.js
// const jwt = require('jsonwebtoken')

// module.exports = (req, res, next) => {
//   const token = req.headers.authorization
//   if (!token) return res.status(401).json({ error: 'No token provided' })

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET)
//     req.user = decoded
//     next()
//   } catch {
//     res.status(401).json({ error: 'Invalid token' })
//   }
// }
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ error: 'No token provided' })

  // Extract token from 'Bearer <token>'
  const token = authHeader.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'No token provided' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}
