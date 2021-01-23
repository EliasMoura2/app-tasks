const Task = require('../models/task.model')

module.exports = {
  allTasks: async (req, res) => {
    try {
      const tasks = await Task.find({})
      res.render('index', { tasks })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },
  addTask: async (req, res) => {
    try {
      const { title, description } = req.body
      const newTask = new Task({ title, description })
      await newTask.save()
      res.redirect('/')
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },
  doneTask: async(req, res) => {
    try {
      const task = await Task.findById(req.params.id)
      task.status = !task.status
      task.save()
      res.redirect('/')
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },
  getUpdateTask: async (req, res) => {
    try {
      const task = await Task.findById(req.params.id)
      res.render('edit', { task })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },
  postUpdateTask: async (req, res) => {
    try {
      const { title, description, status } = req.body
      const update_values = { title, description, status }
      await Task.findByIdAndUpdate(req.params.id, update_values)
      res.redirect('/')
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },
  deleteTask: async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id)
      res.redirect('/')
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }
}


