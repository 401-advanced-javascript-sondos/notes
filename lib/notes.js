'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)
const Notes = require('./model/notes-schema.js');


class NoteAdd{

 execute (opts) {
  if(opts && opts.action ==='add'|| opts && opts.action ==='a') {
  this.add(opts);
 
  console.log(opts)
  }else if(opts.listType){
    // console.log('opts',opts);
    this.find(opts)
  }else if(opts.list){
    // console.log('Enter a valid action');
    this.all()
  }else if(opts.delete){
    this.delete(opts)
  }

};


async add(options) {

  let note={payload:options.payload, category:options.category  }
  console.log('note',note)
  let record = new Notes(note);
  let saved = await record.save();
  console.log('-------------------');
  console.log("saved : ", saved);
  console.log('-------------------');
  return saved; 
}


async all(){
  let allitems = await Notes.find();
  console.log('-------------------');
  console.log("allitems : ", allitems);
  console.log('-------------------');
  return allitems;
}

async find(data){
  let select = await Notes.find({category:data.listType});
  console.log('-------------------');
  console.log("select by category : ", select);
  console.log('-------------------');
  return select;
}

async delete(data){
  let deletedata = await Notes.findByIdAndDelete (data.delete);
  console.log('-------------------');
  console.log("deleted item : ", deletedata);
  console.log('-------------------');
  return deletedata;
}

// add  (data) {
//   //  this.id=Math.random()*100;
//   //  this.action=data.action;
//   //  this.payload=data.payload;
//   //  console.log(`action : ${this.action} & mynote: ${this.payload} with id: ${this.id} `)
  
//   };



}



// function noteAdd () {

// };


// noteAdd.prototype.execute = function (opts) {
//   if (opts.action ==='add'|| opts.action ==='a') {
//   this.add(opts);
//   }else{
//     console.log('Enter a valid action');
//   }
// };


// noteAdd.prototype.add = function (data) {
//    this.id=Math.random()*100;
//    this.action=data.action;
//    this.payload=data.payload;
//    console.log(`action : ${this.action} & mynote: ${this.payload} with id: ${this.id} `)
//   };

module.exports = NoteAdd;