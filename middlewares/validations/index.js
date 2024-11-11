const {validationResult} = require("express-validator");

// Import validation middleware
const authValidation = require('./authValidation');
const userValidation = require('./userValidation');


// Validation result middleware
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};


module.exports = {
    authValidation,
    userValidation,
    handleValidationErrors,
};

