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
var doThings = {
  oneThing, twoThing
};

var colorThings = {
  redThing, blueThing
};

var color = "red";
doThing[color + "Thing"] = colorThings[color];

// use the things
doThings.oneThing();
doThings.twoThing();
doThings.redThing();
// ... etc

