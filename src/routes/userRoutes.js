const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// Route for user registration
// This endpoint allows new users to register by providing necessary details.
router.post('/register', registerUser);

// Route for user login
// This endpoint allows existing users to log in using their credentials.
router.post('/login', loginUser);

// Export the router to use in other parts of the application
// This makes the router available for importing in the main server file or other modules.
module.exports = router;