'use strict';

// Bring in some 3rd party libraries to help us out


const minimist = require('minimist');



class Input {

  constructor() {

    console.log("process.argv : ", process.argv);
    let note = process.argv[3];
    const args = minimist(process.argv.slice(2));
    console.log(" args minimist >>>>> ", args)
    console.log('obj', Object.keys(args)[1])
    let actioninput = Object.keys(args)[1];

    this.action = this.getAdd(actioninput);
    this.payload = this.getNote(note);

  }


  getAdd(action) {
    let validMethods = /add|a/i;
    let x = validMethods.test(action) ? action : 'Enter a valid action';
    // console.log(x)
    return x;
  };

  getNote(payload) {
    // console.log(payload)
    return payload ? payload : 'Error: invalid note';
  };

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