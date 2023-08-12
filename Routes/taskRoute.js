const express = require('express');
const { postTask,getTasks, getTask, updateTask } = require('../Controllers/taskContoller');
var router = express.Router();
router.get('/', getTasks);
router.get('/:id', getTask)
router.post('/', postTask)
router.put('/:id', updateTask);
module.exports = router;