/*const repeatString = function() {

}; */
function repeatString(string, times){
    if (times < 0){
        return 'ERROR';
    }
    let current = "";
    for (let i = 0; i < times; i++){
        current = current + string;
    }
    return current;
}

// Do not edit below this line
module.exports = repeatString;
