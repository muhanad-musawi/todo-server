import fs from 'fs';
import { toUnicode } from 'punycode';
import { saveTodo, getTodos} from './todos';
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
    const content = fs.readFileSync('./todos.json', 'utf-8' )
    expect(content).toContain("false")
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

    
/*
test("doppelt eingetragen", () => { 
    // given / gegeben
    const content = fs.readFileSync('./todos.json')
 
    expect(content).not.toContain("Hallo Welt")
    expect(new Set(content)).not.toContain("Hallo Welt");
   // expect(content).not.toHaveReturnedWith("Hallo Welt");
})

// --- abhakt
test(" ToDo check exists", () => {
    // given / gegeben
    saveCheck("Hallo Welt", true)

    // then / dann
    const exists = fs.existsSync('./todos.json')
    expect(exists).toBeTruthy()
})

test("check is true", () => {
    // given / gegeben
    // when / wenn 
    // then / dann
    const content = fs.readFileSync('./todos.json', 'utf-8' )
    expect(content).toContain("true")
})
*/
// --- anzeigt

