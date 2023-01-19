import fs from 'fs';
import { saveTodo, getTodos, filterCheckTodos, filterFavouriteTodos} from './todos.controller';
beforeEach(() => { 
    const exists = fs.existsSync('./todos.json')
    if (exists) {
        fs.unlinkSync('./todos.json')
    }
})

test("if todo.json file is created", () => {
    // given / gegeben
    // es gibt noch keine todos.json
    // testen obs da ist / bzw. löschen
    
    // when / wenn 
    // ich ein Todo Speicher
    saveTodo("Hallo Welt")

    // then / dann
    // muss eine json datei existieren
    const exists = fs.existsSync('./todos.json')
    expect(exists).toBeTruthy()

})

 test("speichert valides json", () => {
    saveTodo("Hallo Welt")
   
    const content = fs.readFileSync('./todos.json', 'utf-8' )
    expect(() => JSON.parse(content)).not.toThrow()
})

// neu hinzugefügt
test("speichert ein Todo ", () => {
    saveTodo("Hallo Welt")
    const content = fs.readFileSync('./todos.json', 'utf-8' )
    expect(content).toContain("Hallo Welt")
})

// neu hinzugefügt
test("speichert den status false", () => {
    saveTodo("Hallo Welt")
    const todo = getTodos();
    expect(todo[0].status).toBe(false);
})


// --- Lesen

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

    
// neu hinzugefügt
test("doppelt eingetragen", () => { 
    // given / gegeben
    saveTodo("Test")
    const content = fs.readFileSync('./todos.json' , 'utf-8' )
 
    //expect(content).toContain("Test");
    expect(new Set(content)).not.toContain("Test");
})

// --- abhakt
// neu hinzugefügt
test(" filter all check Todos", () => {
    // given / gegeben
    const list = [
       {title: "Test", status: true}, 
       {title: "Test2", status: false}, 
       {title: "Test3", status: true}, 
       {title: "Test4", status: false}
    ]

    const todos = filterCheckTodos(list);
    // then / dann
    expect(todos.length).toBe(2);
    expect(todos[0].title).toBe("Test");
    expect(todos[1].title).toBe("Test3");
    expect(todos[0].status).toBe(true);
    expect(todos[1].status).toBe(true);
})

test("filter all favourite Todos", () => { 
    // given / gegeben 
   const list = [
     {title: "Test", status: false, favouriteStatus: true},
     {title: "Test2", status: true, favouriteStatus: false},
     {title: "Test3", status: false, favouriteStatus: true},
     {title: "Test4", status: true, favouriteStatus: false}
    ]
   
    const todos = filterFavouriteTodos(list);
    // then / dann
    expect(todos.length).toBe(2);
    expect(todos[0].title).toBe("Test");
    expect(todos[1].title).toBe("Test3");
    expect(todos[0].favouriteStatus).toBe(true);
    expect(todos[1].favouriteStatus).toBe(true);
})

// --- anzeigt

