const express = require('express')
const router = express.Router()
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userControllers')

// GET /users
router.get('/', getAllUsers)

// POST /user
router.post('/', createUser)

// GET /users/:userId
router.get('/:userId', getUserById)

// PUT /cars/:carId
router.put('/:userId', updateUser)

// DELETE /cars/:carId
router.delete('/:userId', deleteUser)

module.exports = router
