/*
a = 7; //Global Scope
let b = 9; // Block Scope
var c = 11; // Function Scope
*/

//----------------------------------------------------------------------------

/*

Block Scope : 

function fun() {
  let a = 5;

  if (a == 5) {
    let b = 7;
    console.log("inside : ", b);
  }
  console.log("outside : ", b); // as b is inside if block , so it has block scope and it can not be accessed outside
}

fun();

*/

//----------------------------------------------------------------------------

/*

Function Scope : 

function fun() {
  let a = 5;

  if (a == 5) {
    var b = 7;
    console.log("inside : ", b);
  }
  console.log("outside : ", b); // now as b is difiened as function scope,so it now can be accessed within the whole fun()
}

fun();

*/

//----------------------------------------------------------------------------

b = 7;

function fun() {
  let a = 5;

  if (a == 5) {
    console.log("inside : ", b);
  }
  console.log("outside : ", b); // now as b is difiened as Global scope,so it now can be accessed everywhere in the file
}

fun();
console.log("Outside of fun : ", b);
