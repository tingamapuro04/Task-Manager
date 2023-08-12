const express = require('express');
const { postTask } = require('../Controllers/taskContoller');
var router = express.Router();
router.post('/', postTask);

module.exports = router;