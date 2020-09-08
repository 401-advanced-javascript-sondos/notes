'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)
const NotesCollection = require('./notes-schema');


/**
     * Implementing CRUD operations for mongoose methods (from the notes schema)
     * * all() --> mongoose.find() method
     * * add() --> mongoose.save() method
     * * delete() --> mongoose.findByIdAndDelete() method
     */

class NoteDb{



async add(data) {
    // let note={payload:options.payload, category:options.category  }
    // console.log('note',note)
    let record = new NotesCollection(data);
    let saved = await record.save();
    return saved; 

}


async find(data){
    if (data){
        let select = await NotesCollection.find({data});
        return select
    }else{
        let select = await NotesCollection.find();
        return select
    }
}



async delete(_id){
  return await NotesCollection.findByIdAndDelete (_id);
}

list(record){
    if(record.catagory){
      return  NotesCollection.find({catagory:record.catagory});
    }else{
      return NotesCollection.find({});
    }
  }

  
};


module.exports =  NoteDb;