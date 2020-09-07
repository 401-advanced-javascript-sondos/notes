'use strict';

jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(()=> {
    return { _: [], a: 'note' }
});

const Input = require('../lib/input.js');

describe('Input Module', () => {

    it('input class will work with dummy data', () => {
        let options = new Input();
        console.log('options',options)
        expect(options.action).toEqual('a');
        expect(options.payload).toEqual('note');
      });


    it('getAdd() will default to Enter a valid action when method has no value', ()=> {
        let options = new Input();
        expect(options.getAdd()).toEqual('Enter a valid action');
    });

    it('getAdd() will have valid methods when specified', ()=> {
        let options = new Input();
        expect(options.getAdd('a')).toEqual('a');
        expect(options.getAdd('add')).toEqual('add');
    });

    it('Valid() respects proper object', ()=> {
        let options = new Input();
        expect(options.valid()).toBeTruthy();
    });

    it('getNote() will default to Error: invalid note when method has no value', ()=> {
        let options = new Input();
        expect(options.getNote()).toEqual('Error: invalid note');
    });

    it('getNote() returns my Note if valid', ()=> {
        let options = new Input();
        let note = 'http://foo.com';
        expect(options.getNote(note)).toBeTruthy();
    });
    
});
