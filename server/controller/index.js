const todoModel = require('../../db/models/todo')

module.exports = {
  getTodos(req, res) {
    todoModel.find().then((todos) => {
      res.send(todos);
    }).catch(err => {
      res.send(err);
    })
  },
  addTodo(req, res) {
    const todo = new todoModel({
      todo: req.body.todo,
    });
    todo.save().then(todo => {
      res.send(todo);
    }).catch(err => {
      res.send(err);
    })
  },
  deleteTodo(req, res) {
    console.log(req.body)
    todoModel.findByIdAndDelete(req.body._id).then(deleted => {
      res.send(deleted)
    }).catch(err => {
      res.send(err);
    })
  }
}
