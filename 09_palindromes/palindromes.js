const palindromes = function (string) {
    let symbols = ['!', ',', '.', ' '];
    const punctuation = /[\.,?!]/g;
    let newString = string.replace(punctuation, "");
    for (let letter = 0; letter < newString.length; letter++){
        if (newString[letter] === " ") {
            newString = newString.replace(newString[letter], '');
        }
    }
    newString = newString.toLowerCase();
    console.log(newString);
    for (let start = 0; start < newString.length; start++){
        let end = newString.length - (start+1);
        if (newString[start] !== newString[end]){
            return false
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
