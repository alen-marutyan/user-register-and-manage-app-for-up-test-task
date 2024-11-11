const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const {authValidation, handleValidationErrors} = require('../middlewares/validations');
const checkDuplicateEmail = require("../middlewares/checkDuplicateEmail");

router.post('/register', authValidation.registerValidation, handleValidationErrors, checkDuplicateEmail, authController.register);
router.post('/login', authValidation.loginValidation, handleValidationErrors, authController.login);

module.exports = router;
