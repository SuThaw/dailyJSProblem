/*=======================================================
=            Asserting Test for all the code            =
=======================================================*/

const assert = require('assert');

/*----------  Testing For String Repeat Library  ----------*/

const StringProblem = require('./string-problem');

assert.deepEqual(StringProblem.repeatStr(2,'abc'),'abcabc');

assert.deepEqual(StringProblem.longest('defff','aaabc'),'abcdef');

console.log('Passed all the test')




