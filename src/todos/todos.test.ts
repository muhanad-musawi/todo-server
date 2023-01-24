import fs from 'fs';
import { saveTodo, getTodos, filterCheckTodos, filterFavouriteTodos} from './todos';
beforeEach(() => { 
    const exists = fs.existsSync('./todos.json')
    if (exists) {
        fs.unlinkSync('./todos.json')
    }
})

test("if todo.json file is created", () => {
    saveTodo("Hallo Welt")
    const exists = fs.existsSync('./todos.json')
    expect(exists).toBeTruthy()
})

test("speichert valides json", () => {
    saveTodo("Hallo Welt")
    const content = fs.readFileSync('./todos.json', 'utf-8' )
    expect(() => JSON.parse(content)).not.toThrow()
})

test("speichert ein Todo ", () => {
    saveTodo("Hallo Welt")
    const content = fs.readFileSync('./todos.json', 'utf-8' )
    expect(content).toContain("Hallo Welt")
})

test("speichert den status false", () => {
    saveTodo("Hallo Welt")
    const todo = getTodos();
    expect(todo[0].status).toBe(false);
})

test("Liest die json datei und gibt ein Array zurück", () => {
    saveTodo("test")
    const todos = getTodos();
    expect(Array.isArray(todos)).toBe(true);
})

test("Schreib ein Todo in die json Datei und lese es wieder raus", () => {
    saveTodo("Test")
    const todos = getTodos(); 
    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe("Test");
})
   
test("kann nicht doppelt eingetragen", () => { 
    saveTodo("Test")
    saveTodo("Test")
    const todos = getTodos(); 
    expect(todos.length).toBe(1);
})

test("ich kann zwei todos eintragen", () => { 
    saveTodo("Test")
    saveTodo("Test2")
    const todos = getTodos(); 
    expect(todos.length).toBe(2);
})

test(" filter all check Todos", () => {
    const list = [
       {title: "Test", status: true}, 
       {title: "Test2", status: false}, 
       {title: "Test3", status: true}, 
       {title: "Test4", status: false}
    ]

    const todos = filterCheckTodos(list);
    expect(todos.length).toBe(2);
    expect(todos[0].title).toBe("Test");
    expect(todos[1].title).toBe("Test3");
    expect(todos[0].status).toBe(true);
    expect(todos[1].status).toBe(true);
})

test("filter all favourite Todos", () => {
   const list = [
     {title: "Test", status: false, favouriteStatus: true},
     {title: "Test2", status: true, favouriteStatus: false},
     {title: "Test3", status: false, favouriteStatus: true},
     {title: "Test4", status: true, favouriteStatus: false}
    ]
   
    const todos = filterFavouriteTodos(list);
    expect(todos.length).toBe(2);
    expect(todos[0].title).toBe("Test");
    expect(todos[1].title).toBe("Test3");
    expect(todos[0].favouriteStatus).toBe(true);
    expect(todos[1].favouriteStatus).toBe(true);
})


