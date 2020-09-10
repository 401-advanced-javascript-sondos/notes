#!/usr/bin/env node


'use strict';
require('dotenv').config()
const mongoose = require('mongoose');
const notes = require('./lib/model/notes-schema.js');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


 const URL=process.env.MONGOOSE_URL;
//const URL = 'mongodb://localhost:27017/notes';
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


const options = new Input();
const myNotes=new Notes(options)

options.valid()? myNotes.execute(options) : help();

function help(){
    console.log(`
        add usage:  --add <note> 
        -a add note
        --add add note
        --up update
        --delete for delete data
        --list to find all data
        --list <_id> to find data bu id
    `);
}

