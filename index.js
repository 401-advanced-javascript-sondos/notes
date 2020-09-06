#!/usr/bin/env node


'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const options = new Input();
const myNotes=new Notes(options)
myNotes.execute(options)
