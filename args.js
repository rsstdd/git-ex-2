function args() {
  return arguments.length;
}

args(1, 2, 3);

console.log(args(1, 2, 3, 4, 5));

function args2() {
  console.log(arguments.pop());
}

//arguents are objects. 
console.log(args2(1, 2, 3, 4, 5));
