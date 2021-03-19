function rangeOfNumbers(startN, endN) {
    if( endN - startN === 0) {
        return [startN];
    } else if(startN > endN) {
        return "The starting number will always be less than or equal to the enging number";
    } 
    else {
        var num = rangeOfNumbers(startN,endN-1);
        num.push(endN);
        return num;
    } 
}
rangeOfNumbers(1, 7);
rangeOfNumbers(3, 10);
rangeOfNumbers(5, 5);
rangeOfNumbers(7, 5);
console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;