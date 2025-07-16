const express = require('express')
const router = express.Router()

const {
  createMember,
  getAllMembers,
  getMemberByUser,
  updateMember,
  deleteMember
} = require('../controllers/memberController')

const auth = require('../middleware/auth')
const adminAuth = require('../middleware/adminAuth')

// 👇 Only admin can view all members or one by userId
router.get('/', adminAuth, getAllMembers)
//router.get('/user/:userId', adminAuth, getMemberByUser)

// 👇 These routes can be used by authenticated users
router.post('/', auth, createMember)
router.put('/user/:userId', auth, updateMember)
router.delete('/user/:userId', auth, deleteMember)
router.get('/user/:userId', auth, getMemberByUser)

module.exports = router
