function sumFibonacci(num) {
   if(num <= 1)
   return 1;
   else if(num <= 0){
    return 0;

   }
}
sumFibonacci(1);
sumFibonacci(10);
sumFibonacci(20);
sumFibonacci(4);
sumFibonacci(-5);
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;