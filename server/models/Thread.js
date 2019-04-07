const { Schema, model } = require('mongoose');

const ThreadSchema = new Schema({
    author: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = model('Thread', ThreadSchema);