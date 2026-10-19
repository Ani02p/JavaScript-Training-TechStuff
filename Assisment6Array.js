// 1. Take an array of objects of employees created above and 
// print those employees whose age is less than 50.

let employees = [
    {name : "aniket" , age :22 , company : "TechStuff"},
    {name : "ajay" , age :29 , company : "TechStuff" },
    {name : "aman" , age :50 , company : "TechStuff" },
    {name : "kajal" , age : 52 , company : "TechStuff"},
    {name : "Ruhi" , age :42 , company : "TechStuff" },
    {name : "khushi" , age : 22 , company : "TechStuff"},
    {name : "arpan" , age : 29 , company : "TechStuff" },
    {name : "darpan" , age : 32 , company : "TechStuff"},
    {name : "neha" , age : 62 , company : "TechStuff" }
]
for (let key of employees) {
    if (key.age < 50) {
        console.log(key);
    }
}