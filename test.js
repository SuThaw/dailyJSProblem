/*=======================================================
=            Asserting Test for all the code            =
=======================================================*/

const assert = require('assert');

/*----------  Testing For String Repeat Library  ----------*/

const repeatString = require('./repeat-string');

assert.deepEqual(repeatString(2,'abc'),'abcabc');




