// " - Create a function that returns array of employees
//  from a random time from 1 to 2 seconds using promise chaining.
// - Create another promisified function that sorts this employee list from above response 
// by name. Chain it to above promise"
const employees = [
    { id: 1, name: "Rahul", age: 25 },
    { id: 2, name: "Aman", age: 22 },
    { id: 3, name: "Priya", age: 28 },
    { id: 4, name: "Neha", age: 24 }
];
function getEmployees() {
    return new Promise((resolve) => {
        let delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            resolve(employees);
        }, delay);
    });
}
function sortEmployees(employeeList) {
    return new Promise((resolve) => {
        let sorted = [...employeeList].sort((a, b) =>
            a.name.localeCompare(b.name)
        );

        resolve(sorted);
    });
}
getEmployees()
    .then((data) => {
        console.log("Employees received:");
        console.log(data);

        return sortEmployees(data);
    })
    .then((sortedEmployees) => {
        console.log("Employees sorted by name:");
        console.log(sortedEmployees);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
