// src/app.js
const express = require('express');
const dotenv = require('dotenv'); // Add this line
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');

dotenv.config();

const app = express();
app.use(express.json());
connectDB();
app.use('/api/users', userRoutes);
app.use(errorHandler);

module.exports = app;