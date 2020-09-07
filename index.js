#!/usr/bin/env node


'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const { help } = require('yargs');

const options = new Input();
const myNotes=new Notes(options)

options.valid()? myNotes.execute(options) : help();

function help(){
    console.log(`
        add usage:  --add <note> 
        -a add note
        --add add note
    `);
}

