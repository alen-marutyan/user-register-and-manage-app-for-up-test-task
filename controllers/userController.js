const userService = require('../services/userService');

class UserController {
    async getProfile(req, res, next) {
        try {
            const user = await userService.getProfile(req.user.id);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async updateProfile(req, res, next) {
        try {
            const { name, email } = req.body;
            const user = await userService.updateProfile(req.user.id, name, email);
            res.json({ message: "Profile updated", user });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
