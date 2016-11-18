/*===========================================================
=            Insert into array with index number            =
===========================================================*/

const insert = (arr,index,data) => { 
    arr.splice(index,0,data);
    return arr;
};


/*=====  End of Insert into array with index number  ======*/


/*======================================================
=            Check all the element is array            =
======================================================*/
/*
    Is every value in the array in an array?
    This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
    Examples:
            [[1],[2]] => true
            ['1','2'] => false
            [{1:1},{2:2}] => false
*/

const arrCheck = value => value.every(item => item.constructor === Array);


/*=====  End of Check all the element is array  ======*/


module.exports = { insert, arrCheck };