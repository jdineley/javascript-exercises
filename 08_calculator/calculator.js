const add = function(...args) {
	return args.reduce((tot, curVal) => tot + curVal);
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  if(arr.length){
    return arr.reduce((tot, curVal) => tot + curVal);
  } else {
    return  0;
  }

};

const multiply = function(arr) {
  return arr.reduce((mul, curVal) => mul * curVal)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if(a <= 1) return 1;
  return a * factorial(a-1);
};

//factorial(4):
// 4 * factorial(3)
//                 3 * factorial(2)
//                                 2 * factorial(1)
//                                                 1
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
