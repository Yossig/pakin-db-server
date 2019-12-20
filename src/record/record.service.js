var recordModel = require('./record.model');

class recordService {
    getAll() {
        return recordModel.find({}).exec();
    }
}

module.exports = new recordService();