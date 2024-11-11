const { ValidationError } = require('express-validator');

const errorHandler = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(400).json({ errors: err.errors });
    }

    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
    });
};

module.exports = errorHandler;
