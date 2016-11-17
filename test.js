/*=======================================================
=            Asserting Test for all the code            =
=======================================================*/

const assert = require('assert');

/*----------  Testing For String Repeat Library  ----------*/

const StringProblem = require('./string-problem');

assert.deepEqual(StringProblem.repeatStr(2,'abc'),'abcabc');

assert.deepEqual(StringProblem.longest('defff','aaabc'),'abcdef');


/*----------  Testing For Array Problem  ----------*/

const ArrayProblem = require('./array-problem');

const arr = [ 'A' ,'C'];

assert.deepEqual(ArrayProblem.insert(arr,1,'B'),['A','B','C']);

console.log('Passed all the test')




