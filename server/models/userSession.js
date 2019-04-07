const { Schema, model } = require('mongoose');

const UserSessionSchema = new Schema({
    userId: { 
        type: String, 
        required: true 
    },
    isDeleted: {
        type: Boolean, 
        default: false
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('UserSession', UserSessionSchema);