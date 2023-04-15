const router = require('express').Router();
const db = require('../util/database');

exports.getTodo = async (req, res) => {
    const [rows, fields] = await db.execute("SELECT * FROM todo_table");
    console.log(rows);
    res.send(rows);
}

exports.postTodo = async (req, res) => {

    const [rows, fields] = await db.execute("INSERT INTO todo_table (value) VALUES(?)",[req.body.value]);
    console.log(req.body);
    res.send({message : "Data send sucessfully"});
}

exports.editTodo = async (req, res) => {
    const [rows, fields] = await db.execute("UPDATE todo_table SET value = ? WHERE id = ?",[req.body.value, req.body.id]);
    res.send({message: "todo value is updated successfully"});
}

exports.deleteTodo = async (req, res) => {
    let todoId = req.body.id;
    const [rows, fields] = await db.execute("DELETE FROM todo_table WHERE id = ?",[req.body.id]);
    res.send({message: "Delete todo successfully"});

}

exports.router = router;

