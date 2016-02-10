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
  oneThing: oneThing,
  twoThing: twoThing,
  redThing: redThing,
  blueThing: blueThing
};


// use the things
doThings.oneThing();
doThings.twoThing();
// ... etc
