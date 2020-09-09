'use strict';

// Bring in some 3rd party libraries to help us out


const minimist = require('minimist');


class Input {

  constructor() {

    // console.log("process.argv : ", process.argv);
    const args = minimist(process.argv.slice(2));
  //  console.log(" args minimist >>>>> ", args);


    // let actioninput = Object.keys(args)[1];
    if (args.a || args.add) {
      this.action = this.getAdd(Object.keys(args)[1]);
      this.payload = this.getNote(args.a || args.add);
      this.category = args.category;
    } else if (args.list && typeof (args.list) !== true) {
      console.log('listtype')
      this.listType = args.list;
    } else if (args.list) {
      this.list = Object.keys(args)[1];
    } else if (Object.keys(args)[1] == 'delete') {
      this.delete = args.delete;
    }else if(Object.keys(args)[1] == 'up'){
      this.update = args.up;
      this.obj=process.argv[4];
      // console.log(this.obj)
    }




  }

  getAdd(act) {
    // let validMethods = /add|a/i;
    // let x = validMethods.test(act) ? act : 'Enter a valid action';
    if (act === 'add' || act === 'a') {
      // console.log('act', act)
      return act
    } else {
      return 'Enter a valid action';
    }



  };

  getNote(payload) {
    // console.log(payload)
    if (typeof (payload) === 'string') { return payload }
    else {
      console.log('Error: invalid note');
      return false
    }
  };


  valid() {
    if (this.action && this.payload) {
      console.log("action : ", this.action);
      console.log(" Note : ", this.payload)
      return this.action && this.payload;
    }
    else {
      return true
    }

  }


}






/*
function Input() {
  console.log("process.argv : ", process.argv);
  let note = process.argv[3];
  const args = minimist(process.argv.slice(2));
  console.log(" args minimist >>>>> ", args)
  console.log('obj', Object.keys(args)[1])
  let actioninput = Object.keys(args)[1];
  // Use the args to create our properties with helper methods
  this.action = this.getAdd(actioninput);
  this.payload = this.getNote(note);
}
Input.prototype.getAdd = function (action) {
  let validMethods = /add|a/i;
  let x = validMethods.test(action) ? action : 'Enter a valid action';
  console.log(x)
  return x;
};
Input.prototype.getNote = function (payload) {
  // console.log(payload)
  return payload ? payload : 'Error: invalid note';
};
*/


module.exports = Input;