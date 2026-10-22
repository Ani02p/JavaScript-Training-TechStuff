//2. Print fibbonaci series upto first 10 numbers.
// for loop
let a = 0 ;
let b = 1 ;
let next =0;
console.log(" 0  \n 1 ") 
// for (let i =0 ; i<6 ; i++){
//     next = a + b 
//     console.log(" "+ next);
//     a= b;
//     b= next;
// }-------------------------------------------------------------------


// let x=1; // do while loop 
// do {
//     next = a + b 
//     console.log(" "+ next);
//     a= b;
//     b= next; 
// x++;
// }while(x<=6);

// while loop  
let i = 1;
while(i < 10){
 next = a + b 
    console.log(" "+ next);
    a= b;
    b= next;
    i++;
}


