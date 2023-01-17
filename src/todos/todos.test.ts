import fs from 'fs';
import { saveTodo } from './todos';

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

// test("speichert valides json")
// test("")

// --- abhakt


// --- anzeigt