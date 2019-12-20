var recordService = require('./record.service');

class recordCtrl {
    async getAll(req, res) {
        try {
            res.send(await recordService.getAll());
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
}

module.exports = new recordCtrl();