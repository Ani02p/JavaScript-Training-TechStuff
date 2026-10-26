
import employees from "./employees.json" with { type: "json" };
import { getEmployees } from "./employeeUtils.js";

let result = getEmployees(employees, 500000);

console.log(result);
