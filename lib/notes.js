'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)


class NoteAdd{

  constructor(){  }

  execute (opts) {
  if (opts.action ==='add'|| opts.action ==='a') {
  this.add(opts);
  }else{
    console.log('Enter a valid action');
  }
};


add  (data) {
   this.id=Math.random()*100;
   this.action=data.action;
   this.payload=data.payload;
   console.log(`action : ${this.action} & mynote: ${this.payload} with id: ${this.id} `)
  };


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