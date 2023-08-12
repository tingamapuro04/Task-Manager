const express = require('express');
const { postTask,getTasks, getTask, updateTask, deleteTask } = require('../Controllers/taskContoller');
var router = express.Router();
router.route("/").get(getTasks).post(postTask);
router.route('/:id').get(getTask).put(updateTask).delete( deleteTask);
module.exports = router;