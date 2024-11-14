/*

But if I call before declaration the Sqrt works but Sqrt1 wont work

Sqrt(9); -> because JS takes this fun top of the code before calling
Sqrt1(7);  -> error


*/

function Sqrt(n) {
  console.log("Squrt= ", Math.sqrt(n));
}

var Sqrt1 = function (n) {
  console.log("Squrt1= ", Math.sqrt(n));
};

/*

if I call after declaration both will work fine 

Sqrt(9);
Sqrt1(7);


*/
