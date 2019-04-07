const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post = require('../models/Post');

router.post('/new-post', (req, res) => {
    const { authorId, thread, message } = req.body;
    const post = new Post({
        authorId: mongoose.Types.ObjectId(authorId),
        thread,
        message,
    });
    post.save()
        .then(response => {
            res.status(201).json({
                success: true,
                message: 'Post created',
                postDetails: response
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Couldn´t create new post',
                error: err
            });
        });
});

router.get('/posts-list', (req, res) => {
    Post.find()
        .then(docs => {
            res.status(200).json({
                success: true,
                postsList: docs
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Couldn´t fetch post list',
                error: err
            });
        });
} );

module.exports = router;