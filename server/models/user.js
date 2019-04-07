const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    postCount: {
        type: Number,
        default: 0
    },
});

UserSchema.methods.hashPassword = (password) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
        });
    });
}

UserSchema.methods.verifiedPassword = (password, hash) => {
    bcrypt.compare(password, hash)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
    };

module.exports = model('User', UserSchema);