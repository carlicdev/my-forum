const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Load User Model
const User = require('../models/user');
const UserSession = require('../models/userSession');

router.get('/', (req, res) => {
    User.find()
        .exec()
        .then(docs => {
            res.send(docs);
        })
        .catch(err => console.log(err));
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .select('_id name email date')
        .exec()
        .then(docs => {
            res.status(200).json({
                success: true,
                userDetails: docs
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Couldn´t get user details',
                error: err
            });
        });
});

router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    const errors = [];

    if ( name === '' || email === '' || password === '' || password2 === '') {
        const msg = 'All fields are required';
        errors.push(msg);
    }

    if (password !== password2) {
        const msg = 'Password does not match';
        errors.push(msg);
    }

    if (password.length < 6) {
        const msg = 'Password should be at least 6 characters long';
        errors.push(msg);
    }

    if (errors.length) {
        res.send(errors);
    } else {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    console.log(err);
                    res.send('Couldnt encrypt password try again');
                } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId,
                            name,
                            email,
                            password: hash
                        });
                        user.save()
                            .then(() => res.send('User registered'))
                            .catch(err => console.log(err));
                }
                
            })
        })
    }
});

router.post('/login',  (req, res) => {
    const { email, password } = req.body;
    const errors = [];

    // Look for errors
    if (!email || !password) {
        errors.push('All fields required');
        res.send({
            errors: errors
        });
    }

    // Search User in DB
    User.find({ email: email})
        .exec()
        .then(data => {
            // Email not found in DB
            if(!data.length){
                errors.push('Email not registered')
                res.send({
                    success: false,
                    errors: errors
                });
            }
            // User exists
            if (data.length = 1) {
                const user = data[0];
                // Validate Password
                bcrypt.compare(password, user.password)
                    .then(result => {
                        if (result) {
                            // Create User Session
                            const session = new UserSession({
                                userId: user._id,
                            }).save()
                                .then(result => {
                                    res.send({
                                        success: true,
                                        message: `Welcome back ${user.name}!`,
                                        token: result._id
                                      });
                                })
                                .catch(err => console.log(err));
                        } else {
                            res.send({
                                success: false,
                                message: 'Invalid password'
                            });
                        }
                    })
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));

});

router.get('/verify/:token', (req, res) => {
    UserSession.find({_id: req.params.token, isDeleted: false})
        .exec()
        .then(docs => {
            if (docs.length) {
                res.send({
                    success: true,
                    message: 'Session is live'
                });
            } else {
                res.send({
                    success: false,
                    message: 'Session not found'
                })
            }
        })
        .catch(err => console.log(err));
});

router.post('/logout/:token', (req,res) => {
    UserSession.findOneAndUpdate(
        {_id: req.params.token}, 
        {isDeleted: true}
        ).exec()
            .then(result => {
                res.send({
                    success: true,
                    message: 'See you soon'
                })
            })
            .catch(err => console.log(err));
});

module.exports = router;

