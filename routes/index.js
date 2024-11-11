const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

// Mount routes on specific paths
router.use('/auth', authRoutes);
router.use('/user', userRoutes);

module.exports = router;
