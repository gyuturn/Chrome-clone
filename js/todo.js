const toDoForm=document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList= document.getElementById("todo-list");

const TODOS_KEY="todos";

const toDos=[];

function savedTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
}

function paintToDo(newTodo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.innerText=newTodo;
    const button=document.createElement("button");
    button.innerText="❌"
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    savedTodos();
}

function deleteTodo(event){
    const li =event.target.parentElement;
    li.remove();
}

toDoForm.addEventListener("submit",handleToDoSubmit)


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos!=null){
    const parsedToDOs=JSON.parse(savedToDos);
    parsedToDOs.array.forEach(item => {
        
    });
}