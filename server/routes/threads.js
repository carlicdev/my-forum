const express = require('express');
const router = express.Router();

const Thread = require('../models/Thread');
const Post = require('../models/Post');

router.post('/new-thread', (req, res) => {
    const { author, category, title } = req.body;
    const thread = new Thread({
        author,
        category,
        title,
    });
    thread.save()
        .then(response => {
            res.status(201).json({
                success: true,
                message: 'Thread created',
                threadDetails: response
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Couldn´t create new thread',
                error: err
            });
        });
});

router.get('/thread-list', (req, res) => {
    Thread.find()
        .then(docs => {
            res.status(200).json({
                success: true,
                threadList: docs
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Couldn´t fetch thread list',
                error: err
            });
        });
});

router.get('/thread-list/:id', (req, res) => {
    Thread.find({_id: req.params.id})
        .exec()
        .then(docs => {
            res.status(200).json({
                success: true,
                threadDetails: docs
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Couldn´t fetch thread',
                error: err
            })
        });
});

router.get('/thread/:id', (req, res) => {
    Post.find({thread: req.params.id}).populate('authorId', 'name date')
        .exec()
        .then(docs => {
            if (docs.length) {
                res.status(200).json({
                    success: true,
                    threadPosts: docs
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Thread not found'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Couldn´t fetch posts of this thread',
                error: err
            });
        });
})

module.exports = router;