const form_todo = document.querySelector(".form-todo")
const todo_input= document.querySelector("#todo")
const btn = document.querySelector(".btn")
const todolists = document.querySelector(".todolists")


const todos = [
    {
        name: "Wash clothes"
    },
    {
        name: "Give Excuses"
    },
    {
        name: "Go and see my babe"
    },
    {
        name: "Get some food"
    },
]

form_todo.addEventListener("submit", to_do);

function to_do(e) {
    e.preventDefault();
    const obj = {
        name: todo_input.value
    }
    // console.log(todo_input.value)
    todos.push(obj)
    todoComponent(todos)
}




const todoComponent = (dataArray) => {
    dataArray.forEach(item => {
        const todoItem = document.createElement("h6")
        const fontAwesomeElement = document.createElement("i")
        fontAwesomeElement.classList.add("fa-solid")
        fontAwesomeElement.classList.add("fa-trash-can-list")
        fontAwesomeElement.innerText = item.name
        todoItem.appendChild(fontAwesomeElement)
        todolists.appendChild(todoItem)
    });
    // return todoItem
}

todoComponent(todos)

const names = ["Divine", "Joshua", "Chuks", "Emeka"]

names.forEach((shege) => {
    console.log(shege)
})