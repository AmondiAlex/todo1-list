const form= document.getElementById("form-data");
const input= document.getElementById("input-item");
const todos= document.getElementById("todos-item");

const todos2=JSON.parse(localstrorage.getItem("todos"));

if(todos){
    todos.forEach(function(todo){
        return addTodo(todo);
    }
    )};
    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        addTodo();
    });
    function addTodo(todoItem){
        let todoText =input.value;
        if (todoItem) {
            todoText = todoItem.text;
        }
        if (todoText) {
            const todoEl =document.createElement("li");
            if (todos && todos.complete){
                todoEl.classList.add("complete");
            }
            todoEl.innerText =todoText;
            todoEl.addEventListener("Click", function(){
                todoEl.classList.toggle("completed");
                updateLs();
            });
            todoEl.addEventListener("contextmenu", function(event){
                event.preventDefault();
                todoEl.remove();
                updateLs();
            });
            todosData.appendChild(todoEl);
            input.value ="";
            updateLs();
        }
    }
    function updateLs(){
        const todoEl = document.querySelectorAll("li")
        const todos =[];
        todoEl.forEach(function(todoEl){
            todos.push({
                text: todoEl.innerText,
                completed: todoEl.classList.contains("completed"),
            });
        });
        localStorage.setItem("todos",JSON.stringify(todos));
    }