const router = require('express').Router();
const db = require('../util/database');

const {getTodo, postTodo, editTodo, deleteTodo} = require('../Model/todo');


router.get('/', getTodo);

router.post('/', postTodo)

router.patch('/', editTodo)

router.delete('/', deleteTodo)

module.exports = router;

