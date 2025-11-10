const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/auth.controller');
// const { protect } = require('../middleware/auth.middleware'); // We'll add this later

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', registerUser);

// @route   POST /api/auth/login
// @desc    Authenticate user and get token
// @access  Public
router.post('/login', loginUser);

// @route   GET /api/auth/me
// @desc    Get current user's profile
// @access  Private
// router.get('/me', protect, getUserProfile); // Add 'protect' middleware once created

module.exports = router;