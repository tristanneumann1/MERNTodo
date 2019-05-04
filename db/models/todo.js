const mongoose = require('../index');

const todoSchema = mongoose.Schema({
  todo: String
});

const todoModel = mongoose.model('Todo', todoSchema);

module.exports = todoModel;
