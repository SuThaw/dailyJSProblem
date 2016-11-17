/*===========================================================
=            Insert into array with index number            =
===========================================================*/

const insert = (arr,index,data) => { 
    arr.splice(index,0,data);
    return arr;
};


/*=====  End of Insert into array with index number  ======*/

module.exports = { insert };