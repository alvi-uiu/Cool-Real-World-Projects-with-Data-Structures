// JS allows to create object without defining the class

// Method 1 for creating JS Object : (JSON)-> JavaScript Object Notation

var bird = {
  x: 15,
  y: 23,
  colour: "Blue",
  eggs: ["One", "Two", "Three"],

  fly: function () {
    console.log("bird is flying ", this.x, ",", this.y);
  },
};

console.log(bird.colour);

// for loop :

for (let i = 0; i < bird.eggs.length; i++) {
  console.log(bird.eggs[i]);
}

// for each :

bird.eggs.forEach(function (val, idx) {
  console.log(idx, "->", val);
});

// print fun inside the bird obj :

bird.fly();
