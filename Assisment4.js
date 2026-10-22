// // Creating PR (Pull Request) 
// "1. Take 2 numbers and print the smallest one amongst them
// 2. Take 3 numbers and print the biggest one amongst them
// 3. Use switch case to return a grade for the score, either ""A"", ""B"", ""C"", ""D"", or ""F"". (Take convension for numbers and grades by yourself)
// Anything below 50 is F"


// question - 01 
let x = 10 ;
let y = 200;

if(x<y){
    console.log(x + " is the smallest ");
}
else{
    console.log(y + " is the smallest ");
}

// question 2 


let a = 10;
let b = 25;
let c = 15;

if (a >= b && a >= c) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}


let marks = 70.91;

switch(true){
case marks >=  90 :
    console.log("A");
    break;

    case marks >=  80 :
    console.log("B");
    break;

    case marks >=  70 :
    console.log("C");
    break;

    case marks >=  60 :
    console.log("d");
    break;

    case marks >=  50 :
    console.log("F");
    break;}
