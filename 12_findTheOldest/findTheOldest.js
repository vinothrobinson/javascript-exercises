const findTheOldest = function(object) {
    const ordered = object.sort(function(a, b){
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = (new Date()).getFullYear();
        }
        if (b.yearOfDeath === undefined) {
            b.yearOfDeath = (new Date()).getFullYear();
        }
        const personOneAge = a.yearOfDeath - a.yearOfBirth;
        const personTwoAge = b.yearOfDeath - b.yearOfBirth
        if (personOneAge > personTwoAge) {
            return -1;
        }
        else return 1;
    });
    console.log(ordered)
    return ordered[0]
};

// Do not edit below this line
module.exports = findTheOldest;
