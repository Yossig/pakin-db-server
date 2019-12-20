var mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
    author: String,
    date: Date,
    url: String
})

module.exports = mongoose.model('Record',RecordSchema);