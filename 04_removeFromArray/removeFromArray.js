const removeFromArray = function(array, ...args) {
    const array2 = [];
    for (let j = 0; j < array.length; j++){
        if (!args.includes(array[j])) {
            array2.push(array[j])
        }
    }
    return array2;
};

// Do not edit below this line
module.exports = removeFromArray;
