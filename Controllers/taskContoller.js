const Task = require('../Models/taskModel');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
}

const postTask = async (req, res) => {
  try {
    const { body } = req;
    let task = await Task.create(body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

module.exports = {
  postTask,
  getTasks
}