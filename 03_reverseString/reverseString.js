const reverseString = function(string) {
    const stringArray = string.split("");
    let newString = "";
    for (let i = stringArray.length-1; i > -1; i--){
        newString += stringArray[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
