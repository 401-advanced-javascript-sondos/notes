#!/usr/bin/env node


'use strict';

const mongoose = require('mongoose');
const notes = require('./lib/model/notes-schema.js');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const URL=process.env.MONGOOSE_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


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

