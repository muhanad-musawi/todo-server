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

export function saveCheck(title: string, check: boolean) {
    fs.writeFileSync("./todos.json", title + check)
}