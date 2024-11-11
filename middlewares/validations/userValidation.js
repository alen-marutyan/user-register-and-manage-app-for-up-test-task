const {body} = require("express-validator");

const updateProfileValidation = [
    body('name').optional().notEmpty().withMessage('Name should not be empty'),
    body('email').optional().isEmail().withMessage('Invalid email address'),
];

module.exports = {
    updateProfileValidation,
};