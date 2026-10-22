// "1. Create a function that takes a number and prints all even numbers upto that number
// 2. Create a function that takes 2 parameter => 
// an array of employees and age and returns all employees whose age is less than input age.
// 3. Create a function that takes 2 parameter =>
//  an array of employees and an attribute and returns all employees sorted based on the emoplees 
// attribute being passed as second parameter.
// "

function even(num){
    for(let i =2; i <=num;i+=2){
        console.log(i)
    }
}
even(10);

let employees =[
    {name:"Aniket" , age :  24 ,salary: 12001 },
     {name:"Anuj" , age :  25 ,salary: 12002 },
      {name:"Ajay" , age :  26 ,salary: 12003 },
       {name:"Aastha" , age :  27,salary: 12006 },
        {name:"Ankita" , age :  28,salary: 12007 }
]
function filterEmployees(employees, age) {
    return employees.filter((emp) => emp.age < age);
}
const result = filterEmployees(employees, 25);
console.log(result);

function sortEmployees(employees, attribute) {
    return [...employees].sort((a, b) => {
        if (a[attribute] < b[attribute]) {
            return -1;
        }

        if (a[attribute] > b[attribute]) {
            return 1;
        }

        return 0;
    });
}console.log(sortEmployees(employees, "age"));