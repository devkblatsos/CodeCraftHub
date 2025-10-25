// src/routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({ message: 'Server is running!' });
});

router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route example
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'User profile', userId: req.user.id });
});

module.exports = router;