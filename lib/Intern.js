// Imports the Employee constructor function
const Employee = require("../lib/Employee");

// Creates a new class Intern that extends from employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        // Uses the employee constructors functions values
        super(name, id, email);
        // Creates a new property that holds the school input value
        this.school = school;
    }

    // Creates a new method that returns the school name
    getSchool() {
        return this.school;
    }

    // Creates a new method that returns the Intern role
    getRole() {
        return "Intern";
    }
}

// Exports the Intern class
module.exports = Intern;