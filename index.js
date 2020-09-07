#!/usr/bin/env node


'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


const options = new Input();
const myNotes=new Notes(options)

options.valid()? myNotes.execute(options) : ll();

function ll(){
    console.log(`
        add usage:  --add <note> 
        -a add note
        --add add note
    `);
}

