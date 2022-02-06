// Imports the Employee constructor function
const Employee = require("../lib/Employee");

// Creates a new class Engineer that extends from employee
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        // Uses the employee constructors functions values
        super(name, id, email);
        // Creates a new property that holds the github input value
        this.github = gitHub;
    }

    // Creates a new method that returns the Engineer's github username
    getGithub() {
        return this.github;
    }

    // Creates a new method that returns the Engineer role
    getRole() {
        return "Engineer";
    }
}

// Exports the Engineer class
module.exports = Engineer;