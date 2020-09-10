'use strict';

require('@code-fellows/supergoose');

const note = require('../lib/model/notes-collection.js');
// const note = new Note();
// const Notes = require('../lib/notes.js');

// // Spies!
// // we will get to know if something was called or not.
jest.spyOn(global.console, 'log');

// describe the module I am testing
describe('Notes Module', () => {



////Add

    it('add() will add the data to DB', () => {
        let data = { payload: 'Sondos', category: 'Student' }
        return note.add(data).then(result => {
            Object.keys(data).forEach(e => {
                expect(result[e]).toEqual(data[e]);

            })
        });

    });


 ///find   

    it('get(id) will get data by id ', () => {
        let data = { payload: 'Student 2', category: 'Student 2' }

        return note.add(data)
        .then(result => {
            console.log(result)
            return note.get(result._id)
            .then(e => {
                console.log(e)
                 Object.keys(data).forEach(item => {
                    expect(result[item]).toEqual(data[item]);
                })
            })

        })
    });

 ///find   

 it('get(id) will get data by id ', () => {
    let data = { payload: 'Student 2', category: 'Student 2' }

    return note.add(data)
    .then(result => {
        console.log(result)
        return note.get()
        .then(e => {
            console.log(e)
             Object.keys(data).forEach(item => {
                expect(result[item]).toEqual(data[item]);
            })
        })

    })
});



 ///Delete   

 it('Delete(id) delete data ', () => {
    let data = { payload: 'Student 2', category: 'Student 2' }

    return note.add(data)
    .then(result => {
        // console.log(result)
        return note.delete(result._id)
        .then(e => {
            // console.log(e)
            Object.keys(data).forEach(item => {
                expect().toEqual();
            })
        })

    })
});



//check list

it('list()',()=>{
    let obj={payload:'student',category:'cofee'};
    return note.add(obj)
      .then(result=>{
        return note.list(result.category)
          .then(item=>{
            Object.values(obj).forEach(value=>{
              expect(item[value]).toEqual(obj[value]);
            });
          });
      });
  });

});



// describe('note model()', () => {

//     it('create() a new note', () => {
//       // const option=new Note();
//       const myNote = { payload: 'test', category: 'school' };
//       return Note.create(myNote).then((record) => {
//         Object.keys(myNote).forEach((key) => {
//           expect(record[key]).toEqual(myNote[key]);
//         });
//       });

//     });
//     it('can get(category) ', () => {
//       let obj = { payload: 'test',list: 'school'};
//       return Note.get(obj).then(item => {
//         console.log('item inside get test',item);
//         Object.keys(item[0]).forEach(key => {
//           console.log('obj inside get test',obj);
//           expect(item[key]).toEqual(obj[key]);
//         });
//       });
