const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("constructor function with name, id, email as properties, getName, getID, getEmail, getRole as methods", () => {
        it("properties for name, id and email", () => {
            const newEmployee = new Employee("james", 1, "fake@fakemail.com")
            expect(newEmployee.name).toEqual("james");
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual("fake@fakemail.com");
        });
        // it("should have getName, getId, getEmail, getRole as methods", () => {

        // })
    });
})