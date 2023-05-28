const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  if (array.length === 0){
    return 0;
  }
	const totalSum = array.reduce((total, item) => {
    return total + (item);
  });
  return totalSum
};

const multiply = function(array) {
  if (array.length === 0){
    return 0;
  }
	const totalSum = array.reduce((total, item) => {
    return total * (item);
  });
  return totalSum
};

const power = function(number, power) {
	return number**power
};

const factorial = function(number) {
	if (number === 0) {
    return 1
  }
  if (number === 1) {
    return 1
  }
  else {
    return number * factorial(number-1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
