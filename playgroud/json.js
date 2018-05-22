// let obj = {
//     name: 'Arber'
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Arber", "age": 22}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person.name);

const fs = require('fs');

let originalNote = {
    title: 'some title',
    body: 'some body'
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let noteObj = JSON.parse(noteString);
console.log(typeof noteObj);
console.log(noteObj.title);