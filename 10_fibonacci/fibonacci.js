const fibonacci = function(number) {
    if (typeof(number) === String) {
        number = number.toString()
    }
    if (number < 0) {
        return "OOPS"
    }
    const fibArray = [];
    for (let i = 0; i < number; i++) {
        fibArray[i] = createFib(i)
    };
    console.log(fibArray);
    return fibArray[fibArray.length-1]
}

function createFib(number) {
    if (number === 0) {
        return 1
      }
      if (number === 1) {
        return 1
      }
      else {
        return createFib(number-1) + createFib(number-2)
      }
}
// Do not edit below this line
module.exports = fibonacci;
