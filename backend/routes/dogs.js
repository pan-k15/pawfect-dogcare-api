const express = require('express')
const router = express.Router()
const {
  createDog,
  getDogsByMember,
  getAllDogs
} = require('../controllers/dogController')

const adminAuth = require('../middleware/adminAuth')

// POST /api/dogs - add dog (you might want to protect this with auth in future)
router.post('/', createDog)

// GET /api/dogs/member/:memberId - dogs owned by a member
router.get('/member/:memberId', getDogsByMember)

// ✅ GET /api/dogs/all - admin-only access
router.get('/all', getAllDogs)

module.exports = router
