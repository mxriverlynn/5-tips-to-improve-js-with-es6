var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6
}

var {a,b,c, ...leftover} = obj;

console.log(a, b, c);
console.log(leftover);
