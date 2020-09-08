  
'use strict';

// create a schema for my list
// I will use mongoose.Schema()

const mongoose = require('mongoose');

const notes = mongoose.Schema({
    text : { type: String, required: true },
    category : {type: String, required: true },
});

// create a model and expose it 
module.exports = mongoose.model('notesList', notes);