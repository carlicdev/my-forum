const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
    authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    thread: { type: String, required: true },
    date: { type: Date, default: Date.now },
    message: { type: String, required: true }
});

module.exports = model('Post', PostSchema);