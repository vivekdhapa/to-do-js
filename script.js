const todoInput=document.getElementById('todo-input');
const addTaskButton=document.getElementById('add-task-btn');
const todoList=document.getElementById('todo-list');

let tasks=[]

addTaskButton.addEventListener('click', ()=>{
    const taskText=todoInput.value.trim()//removes all the extra spaces
    if(taskText==="") return;

    const newTask={
        id: Date.now(),
        text: taskText,
        isCompleted:false
    }
    tasks.push(newTask)
    todoInput.value=""; //clear input
    console.log(tasks)
});