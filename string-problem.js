/*=====================================
=            Repeat String            =
=====================================*/

const repeatStr = (n,s) => s.repeat(n);

/*=====  End of Repeat String  ======*/






/*=====================================================================
=            delete repeat character and create new string            =
=====================================================================*/
/**
 *
 * Take 2 strings s1 and s2 including only letters from ato z.
  Return a new sorted string, the longest possible, containing distinct letters,
   - each taken only once - coming from s1 or s2.
   Examples:

    a = "xyaabbbccccdefww"
    b = "xxxxyyyyabklmopq"
    longest(a, b) -> "abcdefklmopqwxy"
    a = "abcdefghijklmnopqrstuvwxyz"
    longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 *
 */


const longest = (s1, s2 ) => `${s1}${s2}`.replace(/(.)(?=.*\1)/g, "").split("").sort().join("");

/*=====  End of delete repeat character and create new string  ======*/



/*=================================
=            Case Swap            =
=================================*/
/*
Given a string, swap the case for each of the letters.

e.g. HelloWorld --> hELLOwORLD
*/

const swap = (str) => str.split("").map(c => /[A-Z]/.test(c) ? c.toLowerCase() : c.toUpperCase()).join("");


/*=====  End of Case Swap  ======*/

module.exports = {
    repeatStr, 
    longest, 
    swap,
};



