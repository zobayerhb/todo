const todoInput = document.querySelector(".todoInput");
const form = document.querySelector(".btn");
const todos = document.querySelector(".todos ul");


const addTodo = (text) =>{
    if(text){
        const newTodo = `
            <li class="sTodo">
                <span>${text}</span> 
                    <div class="todos_icon">
                        <i class="fa-regular fa-trash-can deleteTodo"></i> 
                        <i class="fa-regular fa-pen-to-square editTodo"></i> 
                    </div> 
            </li>
        `
        todos.innerHTML += newTodo
        todoInput.value = ""
        todoInput.focus()

    }
}

const editTodo = (text) => {
    let newTodo = prompt("Edit todo", text)
    if(!newTodo){
        newTodo = prompt("Edit todo", text)
    }else{
        return newTodo
    }
}


todos.addEventListener("click", (e) =>{
    if(e.target.classList.contains("sTodo")){
        e.target.classList.toggle("complete_todo")
    }
    if(e.target.nodeName === "SPAN"){
        e.target.classList.toggle("complete_todo")
    }
    if(e.target.classList.contains("deleteTodo")){
        e.target.parentElement.parentElement.remove()
    }
    if(e.target.classList.contains("editTodo")){
       const editedTodo = editTodo(e.target.parentElement.parentElement.innerText)
       e.target.parentElement.parentElement.innerHTML = `
            <span>${editedTodo}</span>
            <div class="todos_icon">
                <i class="fa-regular fa-trash-can deleteTodo"></i>
                <i class="fa-regular fa-pen-to-square editTodo"></i>
            </div>
       `
    }
})

form.addEventListener("click", (e) => {
    addTodo(todoInput.value)
    e.preventDefault()
})