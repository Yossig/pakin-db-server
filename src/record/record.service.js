var recordModel = require('./record.model');

class recordService {
    getAll() {
        return this.findWithQuery({});
    }

    filter(keywords) {
        let query = {};
        
        if (keywords.length !== 0) {
            query = { tags: { $all: keywords } }
        }

        return this.findWithQuery(query);
    }

    findWithQuery(query) {
        return recordModel.find(query).exec();
    }
}

module.exports = new recordService();