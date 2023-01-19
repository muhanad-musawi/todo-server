import fs from 'fs';

export function saveTodo(title: string) {
    const todos = [{title, status: false}]
    fs.writeFileSync("./todos.json", JSON.stringify(todos) ) 
}

export function getTodos() : Array<{title: string, status: boolean}> { 
    
    const fileContent = fs.readFileSync("./todos.json", "utf-8")
    const todos = JSON.parse(fileContent)
    return todos
}

export function filterCheckTodos(data: Array<{title: string, status: boolean}>) {
    const checkTodos = data.filter((todo) => todo.status === true)
    return checkTodos
}

export function filterFavouriteTodos(data: Array<{title: string, status: boolean, favouriteStatus: boolean}>) {
    const favouriteTodos = data.filter((todo) => todo.favouriteStatus === true)
    return favouriteTodos
}