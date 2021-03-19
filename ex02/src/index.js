function myCounter(n) {
    if (n < 1) {
        return [];
    } else {
        var newArray = myCounter(n-1);
        newArray.unshift(n);
        return newArray;
    }
}
myCounter(-1);
myCounter(10);
myCounter(5);
console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;