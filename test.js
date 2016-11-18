/*=======================================================
=            Asserting Test for all the code            =
=======================================================*/

const assert = require('assert');

/*----------  Testing For String Repeat Library  ----------*/

const StringProblem = require('./string-problem');

assert.deepEqual(StringProblem.repeatStr(2,'abc'),'abcabc');

assert.deepEqual(StringProblem.longest('defff','aaabc'),'abcdef');



/*=================================================
=            Testing For Array Problem            =
=================================================*/



const ArrayProblem = require('./array-problem');

const arr = [ 'A' ,'C'];

/*----------  Array insert  ----------*/

assert.deepEqual(ArrayProblem.insert(arr,1,'B'),['A','B','C']);

/*---------- Check all the element is array  ----------*/
assert.deepEqual(ArrayProblem.arrCheck([1,[3]]), false);
assert.deepEqual(ArrayProblem.arrCheck([[1],[3]]), true);


console.log('Passed all the test')




