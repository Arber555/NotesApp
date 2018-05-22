const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const nodes = require("./nodes.js");

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Boby of note',
    demand: true,
    alias: 'b'
};

const argv = yargs.command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions,
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    }).help().argv;

let command = argv._[0];


if(command === 'add'){
    let note = nodes.addNote(argv.title, argv.body);

    if(note) {
        console.log("Note created");
        nodes.logNote(note);
    } else {
        console.log("Note title taken!");
    }
} else if (command === 'list') {
    let allNotes = nodes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(element => nodes.logNote(element));
} else if (command === 'read') {
    let note = nodes.read(argv.title);
    if(note) {
        console.log("Reade Note");
        nodes.logNote(note);
    } else {
        console.log("Note title do note existe!");
    }
} else if (command === 'remove') {
    let msg = nodes.remove(argv.title) ? "Note was removed" : "Note not found";
    console.log(msg);
} else {
    console.log('ERROR command!');
}