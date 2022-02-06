// Imports the Employee constructor function
const Employee = require("./Employee");

// Creates a new class Manager that extends from employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Uses the employee constructors functions values
        super(name, id, email)
        // Creates a new property that holds the officeNumber input value
        this.officeNumber = officeNumber;
    }

    // Creates a new method that returns the Manager role
    getRole() {
        return "Manager";
    }
}

// Exports the Manager class
module.exports = Manager;