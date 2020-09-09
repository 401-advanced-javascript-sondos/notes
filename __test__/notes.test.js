
'use strict';

let mocdata={action:'add',
paload:'add note'}

const Notes = require('../lib/notes.js');

// Spies!
// we will get to know if something was called or not.
jest.spyOn(global.console, 'log');

// describe the module I am testing
describe('Notes Module', ()=> {
    // test case
    it('excute() does nothing with invalid options', ()=> {
        const note = new Notes();
        note.execute();
        expect(console.log).not.toHaveBeenCalled();
    });

    it('excute() logs out when given options', ()=> {
        const note = new Notes();
        note.execute({opts: 'foo'});
        expect(console.log).toHaveBeenCalled();
    });

});