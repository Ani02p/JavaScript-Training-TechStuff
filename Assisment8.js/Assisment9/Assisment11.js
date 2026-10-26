
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

async function main() {
    console.log("Fetching employees...");

    let result = await getEmployees();

    console.log("Employees received:");
    console.log(result);
}

main();
