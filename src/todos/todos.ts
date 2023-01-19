import fs from 'fs';

interface Todo { 
    title: string; 
    status: boolean;
    favouriteStatus?: boolean;
}

export function saveTodo(title: string) {   
    if (!fs.existsSync("./todos.json")) {
        fs.writeFileSync("./todos.json", "[]")
    }
    const todos: Array<Todo>= getTodos()
    const todo: Todo = {title, status: false, favouriteStatus: false}
    const checkTodo = todos.find((todo) => todo.title === title)
    if (checkTodo) {
        return
    }
    todos.push(todo)
    fs.writeFileSync("./todos.json", JSON.stringify(todos))
}

export function getTodos() : Array<Todo> { 
    const fileContent = fs.readFileSync("./todos.json", "utf-8")
    const todos = JSON.parse(fileContent)
    return todos
}

export function filterCheckTodos(data: Array<Todo>) {
    const checkTodos = data.filter((todo) => todo.status === true)
    return checkTodos
}

export function filterFavouriteTodos(data: Array<Todo>) {
    const favouriteTodos = data.filter((todo) => todo.favouriteStatus === true)
    return favouriteTodos
}