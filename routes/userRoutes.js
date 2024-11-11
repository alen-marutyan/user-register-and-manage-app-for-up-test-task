const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();
const {userValidation, handleValidationErrors} = require('../middlewares/validations');

router.get('/profile', authMiddleware, userController.getProfile);
router.put('/profile', userValidation.updateProfileValidation, handleValidationErrors, authMiddleware, userController.updateProfile);

module.exports = router;
