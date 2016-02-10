function foo(a, b, c, d, e){
  console.log(a, b, c, d, e);
}

var args = [1, 2, 3, 4, 5];

foo.apply(undefined, args);
