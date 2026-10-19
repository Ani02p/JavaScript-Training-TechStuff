/* " (1-1 program using all kind of loops)

 1. Find sum of first 10 natural numbers
 2. Print fibbonaci series upto first 10 numbers.
 3. Print all the keys and values of employee object used in first problem
*/
// using for loop 
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log("Sum:", sum);
// using while  loop
let sum1 = 0;
let i = 1;
while (i <= 10) {
    sum1 += i;
    i++;
}
console.log("Sum1 ", sum1);
// using do {}while loop
let sum3 =0 ;
let m = 1;
do {
    sum3 += m ;
    m++;
}while(m<=10)
    console.log("Sum3 " + sum3);
