const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// Import adminAuthMiddleware
const adminAuthMiddleware = require('./middleware/adminAuth')
// Admin routes
const adminAuthRoutes = require('./routes/adminAuth')

const adminRoutes = require('./routes/admin')
// Routes
const authRoutes = require('./routes/auth')
const bookingRoutes = require('./routes/bookings') // remove .default if using CommonJS
const memberRoutes = require('./routes/members')
const dogRoutes = require('./routes/dogs')
const groomingBathRoutes = require('./routes/groomingBathRoutes')
const dogRunRoutes = require('./routes/dogRunRoutes')
const snackRoutes = require('./routes/snackRoutes')
const cafeRoutes = require('./routes/cafeRoutes')

app.use('/api/snacks', snackRoutes)

app.use('/api/cafe', cafeRoutes)

app.use('/api/dog-run', dogRunRoutes)

app.use('/api/grooming-bath', groomingBathRoutes)

app.use('/api/dogs', dogRoutes)

app.use('/api/auth', authRoutes)
app.use('/api/bookings', bookingRoutes)



app.use('/api/admin/auth', adminAuthRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/members', memberRoutes)

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected')
  app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on http://localhost:${process.env.PORT || 5000}`)
  })
}).catch(err => console.error('❌ DB error:', err))
