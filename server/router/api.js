const router = require('express').Router();
const controller = require('../controller');

router.route('/todo')
  .get(controller.getTodos)
  .post(controller.addTodo)
  .delete(controller.deleteTodo);

module.exports = router;
