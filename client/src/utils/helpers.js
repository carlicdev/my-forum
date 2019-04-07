const moment = require('moment');

let timestamp = {};

timestamp.calendar = (date) => {
     return moment(date).calendar();
}

timestamp.date = (date) => {
     return moment(date).format("MMM Do YYYY")
}

module.exports = {timestamp};