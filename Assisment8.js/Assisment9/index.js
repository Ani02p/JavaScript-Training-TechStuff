
import { Employee } from "./employee.js";

const employees = [
    new Employee(1, "Rahul", 25, 600000, "IT"),
    new Employee(2, "Aman", 22, 450000, "HR"),
    new Employee(3, "Priya", 28, 800000, "Finance"),
    new Employee(4, "Neha", 24, 550000, "IT"),
    new Employee(5, "Vikas", 30, 900000, "HR")
];
console.log("Sorted by Salary:");
console.log(Employee.sortEmployees(employees, "salary"));
console.log("Sorted by Name:");
console.log(Employee.sortEmployees(employees, "name"));

console.log("Sorted by Age:");
console.log(Employee.sortEmployees(employees, "age"));
console.log("Employees older than 24:");
console.log(Employee.filterByAge(employees, 24));
