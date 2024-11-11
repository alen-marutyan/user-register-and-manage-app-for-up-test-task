const User = require('../models/User');

class UserService {
    async getProfile(userId) {
        return User.findById(userId).select('-password -__v');
    }

    async updateProfile(userId, name, email) {
        return User.findByIdAndUpdate(userId, { name, email }, { new: true }).select('-password -__v');
    }
}

module.exports = new UserService();
