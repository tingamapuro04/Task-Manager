const express = require('express');
const { postTask,getTasks } = require('../Controllers/taskContoller');
var router = express.Router();
router.get('/', getTasks);
router.post('/', postTask)

module.exports = router;