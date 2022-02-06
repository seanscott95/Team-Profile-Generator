const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.github = gitHub;
    }
}

module.exports = Engineer;