// Imports the Employee constructor function
const Employee = require("../lib/Employee");

describe("Employee", () => {
    
    describe("constructor function with name, id, email as properties, getName, getID, getEmail, getRole as methods", () => {
        // Creates employee object and tests the properties name, id and email
        it("properties for name, id and email", () => {
            let newEmployee = new Employee("james", 1, "fake@fakemail.com");
            expect(newEmployee.name).toEqual("james");
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual("fake@fakemail.com");
        });
        // Tests the method getName()
        it("should return name in getName()", () => {
            let newEmployee = new Employee("james", 1, "fake@fakemail.com");
            let returnName = newEmployee.getName();
            expect(returnName).toEqual("james");
        });
        // Tests the method getId()
        it("should return the id in getId()", () => {
            let newEmployee = new Employee("james", 1, "fake@fakemail.com");
            let returnId = newEmployee.getId();
            expect(returnId).toEqual(1);
        });
        // Tests the method getEmail()
        it("should return the email in getEmail()", () => {
            let newEmployee = new Employee("james", 1, "fake@fakemail.com");
            let returnEmail = newEmployee.getEmail();
            expect(returnEmail).toEqual("fake@fakemail.com");
        });
        // Tests the method getRole()
        it("should return the role in getRole()", () => {
            let newEmployee = new Employee("james", 1, "fake@fakemail.com");
            let returnRole = newEmployee.getRole();
            expect(returnRole).toEqual("Employee");
        });
    });
})