// Employee constructor function
class Employee {
    constructor(name, id, email) {
        // Creates properties using the input
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Creates a method that returns the name 
    getName () {
        return this.name;
    }

    // Creates a method that returns the id
    getId () {
        return this.id;
    }
    
    // Creates a method that returns the email
    getEmail () {
        return this.email;
    }

    // Creates a method that returns the role as Employee
    getRole () {
        return "Employee";
    }
}

// Exports the employee constructor function
module.exports = Employee;