const router = require('express').Router();
const db = require('../util/database');

const todo = require('../util/todo');

exports.getTodo = async (req, res) => {

    const data =  await todo.find({});
    return res.send(data);

}

exports.postTodo = async (req, res) => {

    await todo.create(req.body);
    res.send({message : "Data send sucessfully"});
}

exports.editTodo = async (req, res) => {
    await todo.findOneAndUpdate({id: req.body.id}, {value: req.body.value});
    res.send({message: "todo value is updated successfully"});
}

exports.deleteTodo = async (req, res) => {
    let todoId = req.body.id;
    await todo.deleteOne({id: todoId});
    res.send({message: "Delete todo successfully"});

}

exports.router = router;

