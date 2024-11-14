// Different Methods of creating objects in JS :

// Method 1 :

var fruit = {
  colour: "green",
  taste: "sour",
};

// Method 2 :

function fruit1(colour, taste) {
  this.colour = colour;
  this.taste = taste;
}

let mango = new fruit1("yellow", "sweet");
let orange = new fruit1("orange", "sour");

console.log(mango);
console.log(orange.colour);

// Method 3 : class declaration  (it wont be hoisted)

class fruit2 {
  constructor(colour, taste) {
    this.colour = colour;
    this.taste = taste;
  }

  fun(ripe) {
    this.ripe = ripe;
    return this.ripe;
  }
}

let lichi = new fruit2("lichiRed", "sweet");

console.log(lichi);

// Method 3.1 : class expression : (it wont be hoisted)

let fruit3 = class {
  constructor(colour, taste) {
    this.colour = colour;
    this.taste = taste;
  }
};

let banana = new fruit3("yellow", "sweet");
