const User = require('../models/User');

const checkDuplicateEmail = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res.status(409).json({ message: "User with this email already exists." });
        }

        next();
    } catch (error) {
        console.error("Error in checkDuplicateEmail middleware:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = checkDuplicateEmail;
