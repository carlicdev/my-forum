const mongoose = require('mongoose');
const URI = require('./config.env');

const database = mongoose;

database.connect(
    URI, {
    useNewUrlParser: true
     }, 
     (err, db) => {
    err? console.log(err) : console.log('connected to DB...')
});

module.exports = database;