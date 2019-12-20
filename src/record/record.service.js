var recordModel = require('./record.model');

class recordService {
    getAll() {
        return recordModel.find({}).exec();
    }

    filter(keywords) {
        if (keywords.length !== 0) {
            return recordModel.find({ tags: { $all: keywords } }).exec();
        } else {
            return recordModel.find({}).exec();
        }
    }
}

module.exports = new recordService();