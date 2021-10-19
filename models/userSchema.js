const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        unique: false,
        default: 'user',
    }

}, { timestamps: true });
module.exports = mongoose.model('users', UserSchema);