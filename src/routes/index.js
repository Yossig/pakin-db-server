var express = require('express');
var router = express.Router();
var recordRoutes = require('../record/record.route');
router.get('/', function (req, res, next) {
    res.sendStatus(200);
});

router.use('/record',recordRoutes);

module.exports = router;
