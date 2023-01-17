import fs from 'fs';

export function saveTodo(title: string) {
    fs.writeFileSync("./todos.json", title)
}