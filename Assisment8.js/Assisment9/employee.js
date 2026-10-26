
export class Employee {
    constructor(id, name, age, salary, department) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }

    static sortEmployees(employees, parameter) {
        return [...employees].sort((a, b) => {
            if (typeof a[parameter] === "string") {
                return a[parameter].localeCompare(b[parameter]);
            }

            return a[parameter] - b[parameter];
        });
    }

    static filterByAge(employees, age) {
        return employees.filter(employee => employee.age > age);
    }
}
