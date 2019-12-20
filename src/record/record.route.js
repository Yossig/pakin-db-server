var express = require('express');
var recordCtrl = require('./record.controller');

const router = express.Router();

router.get('/',recordCtrl.getAll);

module.exports = router;