import express from 'express';
const router = express();

import {getTodo, postTodo,updateTodo, deleteTodo} from '../controllers/todo.js';
const todoArr = [];

router.get('/', getTodo);

router.post('/', postTodo);

router.patch('/', updateTodo);

router.delete('/', deleteTodo);

export default router;

