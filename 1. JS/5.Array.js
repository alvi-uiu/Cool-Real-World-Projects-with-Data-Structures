let arr = ["mango", "apple", "pine-apple"];

console.log(arr);

console.log(arr[1]);

let n = arr.length;

//print all elements :
for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}

arr.push("jackFruit");

console.log(arr);

arr.pop();

console.log(arr);

// find index a particular element :

console.log(arr.indexOf("apple"));

//remove from front :

arr.shift();
console.log(arr);

//add in front :
arr.unshift("kiwi");
console.log(arr);
