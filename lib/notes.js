'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)
//const Notes = require('./model/notes-schema.js');
const Notes = require('./model/notes-collection.js')


class NoteAdd {

  execute(opts) {
    if (opts && opts.action === 'add' || opts && opts.action === 'a') {
      this.add(opts);
      // let note={payload:opts.payload, category:opts.category  }
      // console.log('note',note)
      //  return Notes.add(note)

    } else if (opts.listType) {
      console.log('opts', opts);
      this.find(opts)

      // console.log(opts.listType)
      //   return Notes.get(opts.listType)


    } else if (opts.list) {
      // console.log('Enter a valid action');
      this.all()

      // console.log(opts)
      //   return Notes.get()

    } else if (opts.delete) {
      this.delete(opts)
      // return Notes.delete(opts.delete)
    } else if (opts.update) {
      this.update(opts.update,opts.obj)
    }

  };


  async add(options) {

    let note = { payload: options.payload, category: options.category }
    // console.log('note',note)
    console.log(await Notes.add(note))
    return await Notes.add(note)
    // let record = new Notes(note);
    // let saved = await record.save();
    // console.log('-------------------');
    // console.log("saved : ", saved);
    // console.log('-------------------');
    // return saved; 
  }


  async all() {
    console.log(await Notes.get())
    return await Notes.get()
    //   let allitems = await Notes.find();
    //   console.log('-------------------');
    //   console.log("allitems : ", allitems);
    //   console.log('-------------------');
    //   return allitems;
  }

  async find(data) {
    console.log(data)
    // let select = await Notes.find({category:data.listType});
    console.log(await Notes.get({ _id: data.listType }))
    return await Notes.get({ _id: data.listType })
    // console.log('-------------------');
    // console.log("select by category : ", select);
    // console.log('-------------------');
    // return select;
  }

  async delete(data) {
    console.log('deleteditem', await Notes.delete({ _id: data.delete }))
    return await Notes.delete({ _id: data.delete })
    // let deletedata = await Notes.findByIdAndDelete (data.delete);
    // console.log('-------------------');
    // console.log("deleted item : ", deletedata);
    // console.log('-------------------');
    // return deletedata;
  }

  async update(_id, obj) {
    console.log(_id, obj)
    console.log( 'updated data',await Notes.update(_id, obj))
    return await Notes.update(_id, obj)

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