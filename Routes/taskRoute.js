const express = require('express');
const { postTask } = require('../Controllers/taskContoller');
var router = express.Router();
router('/tasks', postTask);