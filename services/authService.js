const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

class AuthService {
    async register(name, email, password) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ name, email, password: hashedPassword });

            const userData = { ...user.toObject() };
            delete userData.password;

            return userData;
        } catch (error) {
            throw new Error(`Registration failed: ${error.message}`);
        }
    }

    async login(email, password) {
        try {
            const user = await User.findOne({ email });
            if (!user || !await bcrypt.compare(password, user.password)) {
                throw new Error("Invalid credentials");
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            const userData = { ...user.toObject() };
            delete userData.password;

            return { user: userData, token };
        } catch (error) {
            throw new Error(`Login failed: ${error.message}`);
        }
    }
}

module.exports = new AuthService();
