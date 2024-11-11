const authService = require('../services/authService');

class AuthController {
    async register(req, res, next) {
        try {
            const { name, email, password } = req.body;
            const user = await authService.register(name, email, password);
            res.status(201).json({ message: "User registered successfully", user });
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const { user, token } = await authService.login(email, password);
            res.json({ message: "Login successful", token, user });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AuthController();
