

let todoJSONArr = []
let isEdit = false;
let isEditID = -1;

document.addEventListener("DOMContentLoaded", function(event) { 
    getTodoDataFromAPI();
});

async function getTodoDataFromAPI() {
    let res = await fetch('http://localhost:4000/');
    let jsonRes = await res.json();
    console.log(jsonRes);
    todoJSONArr = jsonRes;
    showTodoHelper();
}

async function addTodoFromAPI() {
    
    let todoValue = document.getElementById("todoData").value;
    document.getElementById("todoData").value = "";
    document.getElementById("todoData").focus();
    if(todoValue == "") {
        return ;
    }

    if(isEdit == true) {
        editTodoUsingAPI(todoValue);
        isEdit = false;
        isEditID = -1;
        getTodoDataFromAPI();
        return;
     }

    let data = {
        id : todoJSONArr.length + 1,
        value : todoValue
    }
    
    let res = await fetch('http://localhost:4000/', {
        method: "POST",
        body : JSON.stringify(data),
        headers : {
            'Content-type': 'application/json'
        }
    });
    
    let resMess = await res.json();
    console.log(resMess);
    
    getTodoDataFromAPI();
}

function showTodoHelper() {

    let content ='<ul type = "none">';

    for(let i = 0; i < todoJSONArr.length; i++) {
        content += `<li id = ${todoJSONArr[i].id}> ${todoJSONArr[i].value} </li> 
                    <button id = ${todoJSONArr[i].id} onclick="editTodo(this)" >edit</button> 
                    <button id = ${todoJSONArr[i].id} onclick="deleteTodo(this)" >del</button> 
                    `;
    }
    content += '</ul>';
    document.getElementById("todoContent").innerHTML = content;
}

function editTodo(obj) {
    isEdit = true;
    let todoId = obj.getAttribute("id");
    isEditID = todoId;
    document.getElementById("todoData").value = document.getElementById(todoId).innerText;
}

async function editTodoUsingAPI(value) {
    
    let data  = {
        "id": isEditID,
        "value": value
    }
    let res = await fetch('http://localhost:4000/', {
        method: "PATCH",
        body : JSON.stringify(data),
        headers : {
            'Content-type': 'application/json'
        }
    });
    
    let resMess = await res.json();
    console.log(resMess);
    getTodoDataFromAPI();
}

async function deleteTodo(obj) {

    let todoId = obj.getAttribute("id");
    let data  = {
        "id": todoId
    }
    let res = await fetch('http://localhost:4000/', {
        method: "DELETE",
        body : JSON.stringify(data),
        headers : {
            'Content-type': 'application/json'
        }
    });
    
    let resMess = await res.json();
    console.log(resMess);
    //todoArr.splice(todoId, 1);
    getTodoDataFromAPI();
    
}