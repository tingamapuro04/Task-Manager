const Task = require('../Models/taskModel');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
}

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task){
      res.status(404).json({message: 'Resource could not be found'});
      return;
    } else {
      res.status(200).json(task);
    }
    
  } catch (error) {
    res.status(500).json({message: error.message});
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

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const task = await Task.findByIdAndUpdate(id, body);
    if (!task) {
      res.status(404).json({message: `No task with that ID: ${id}`});
      return;
    } else {
      res.status(201).json({message: "Updated!", obj: task});
    }
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

const deleteTask = async (req, res) => {
  try {
    let { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.status(404).json({message: 'No task with that id'});
      return;
    } else {
      res.status(200).json('Success');
    }
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

module.exports = {
  postTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask
}