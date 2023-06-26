const todoInput = document.querySelector(".todoInput");
const form = document.querySelector(".btn");
const todosOutput = document.querySelector(".todos ul");

const getTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    let allTodos = ""
    todos.forEach((todo, index) => {
        const newTodo = `
            <li class="sTodo">
                <span>${todo.text}</span> 
                    <div class="todos_icon">
                        <i class="fa-regular fa-trash-can deleteTodo" data-id=${index}></i> 
                        <i class="fa-regular fa-pen-to-square editTodo" data-id=${index}></i> 
                    </div> 
            </li>
        `
        allTodos += newTodo
    })
    todosOutput.innerHTML = allTodos
    
}
const addTodo = (text) =>{
    if(text){

        let oldTodos = JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : []
        
        localStorage.setItem('todos', JSON.stringify([...oldTodos, {text}]))

        todoInput.value = ""
        todoInput.focus()
        getTodos()

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


todosOutput.addEventListener("click", (e) =>{
    if(e.target.classList.contains("sTodo")){
        e.target.classList.toggle("complete_todo")
    }
    if(e.target.nodeName === "SPAN"){
        e.target.classList.toggle("complete_todo")
    }

    if(e.target.classList.contains("deleteTodo")){
        const id = e.target.getAttribute("data-id")
        
        let allTodos = JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : [];

        allTodos.splice(Number(id, 1))

        localStorage.setItem("todos", JSON.stringify(allTodos))
        getTodos()

    }

    if(e.target.classList.contains("editTodo")){
       const editedTodo = editTodo(e.target.parentElement.parentElement.innerText)

       const id = e.target.getAttribute("data-id")
        
        let allTodos = JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : [];

        allTodos.splice(Number(id), 1, {text: editedTodo})
        console.log(allTodos)

        localStorage.setItem("todos", JSON.stringify(allTodos))
        getTodos()

    }
})

form.addEventListener("click", (e) => {
    addTodo(todoInput.value)
    e.preventDefault()
})

getTodos()
