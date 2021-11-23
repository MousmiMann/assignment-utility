const add = require('./add');
const maximum = require('./maximum');
const minimum = require('./minimum');
const findhead = require('./findhead');
const findtail = require('./findtail');



describe('Add', () => {

    it('Sum of 0 and 0 is 0', () => {
        expect(add(0, 0)).toEqual(0);
    });

    it('Sum of 1 and 0 is 1', () => {
        expect(add(1, 0)).toEqual(1);
    });

})

describe('maximum', () => {

    it('Maximum of 1,2,3 and 4 is 4', () => {
        expect(maximum([1,2,3,4])).toEqual(4);
    });

})

describe('Min', () => {

    it('Minimum of 1,2,3 and 4 is 4', () => {
        expect(minimum([1,2,3,4])).toEqual(1);
    });

})

describe('Head', () => {

//    it('Head of 0,0,0 and 0 is null', () => {
//            expect(head(0,2,3,4)).toEqual(0);
//        });

    it('Head of 1,2,3 and 4 is 1', () => {
        expect(findhead([1,2,3,4])).toEqual(1);
    });

})

describe('Tail', () => {

//    it('Head of 0,0,0 and 0 is null', () => {
//            expect(head(0,2,3,4)).toEqual(0);
//        });

    it('Tail of 1,2,3 and 4 is 2,3,4', () => {
        expect(findtail([1,2,3,4])).toEqual([2,3,4]);
    });

})