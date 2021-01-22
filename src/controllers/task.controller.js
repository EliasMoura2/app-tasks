const Task = require('../models/task.model')

module.exports = {
  allTasks: async (req, res) => {
    try {
      const tasks = await Task.find({})
      // console.log(tasks)
      res.render('index', { tasks })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },
  addTask: async (req, res) => {
    try {
      // console.log(new Task())
      // console.log(req.body)
      const { title, description } = req.body
      const newTask = new Task({ title, description })
      // console.log(newTask)
      const taskStored = await newTask.save()
      // console.log(taskStored)
      // res.send('add task')
      // res.render('index', { tasks: taskStored })
      res.redirect('/')
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },
  deleteTask: async (req, res) => {
    try {
      // const task = req.params.id
      // console.log(task)
      // const userDelete = await User.findById(req.params.id)
      // res.status(200).json({
        //   success: true,
        //   message: 'User delete',
        //   task
        // })
      await Task.findByIdAndDelete(req.params.id)
      res.redirect('/')
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }
}


