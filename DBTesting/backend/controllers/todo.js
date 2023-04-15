import db from '../util/database.js';
import express from 'express';
const router = express();

export const getTodo = async (req, res) => {
    try {
        const[rows, fields] = await db.execute('select * from todo_table');
        res.send(rows);
    }catch(err){
        res.status(404).send({message:err.message});
    }
}

export const postTodo = async (req, res) => {
    console.log(req.body);
    db.execute('insert into todo_table (value) VALUES(?)',[req.body.value]);

    res.send({message : "Data send sucessfully"});
}

export const updateTodo = async (req, res) => {
    let todoId = req.body.id;
    db.execute('update todo_table set value = ? where id = ?',[req.body.value, req.body.id]);
    res.send({message: "todo value is updated successfully"});
}

export const deleteTodo = async (req, res) => {
    let todoId = req.body.id;
    db.execute('delete from todo_table where id = ?',[req.body.id]);
    res.send({message: "Delete todo successfully"});
}

export default router;
