// define the things
function oneThing(){
  console.log("one");
}

function twoThing(){
  console.log("two");
}

function redThing(){
  console.log("red");
}

function blueThing(){
  console.log("blue");
}

// collect the things

var colorThings = {
  redThing, blueThing
};

// pick a color
var color = "red";

// put it all together
var doThings = {
  oneThing, 
  twoThing,
  [color + "Thing"]: colorThings[color + "Thing"]
};

// use the things
doThings.oneThing();
doThings.twoThing();
doThings.redThing();
// ... etc
