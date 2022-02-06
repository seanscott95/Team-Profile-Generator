// Imports the Manager constructor function
const Manager = require("../lib/Manager");

describe(("Manager"), () => {
    // Creates the manager object and tests the new property officeNumber
    it(("extends employee with the property of office number"), () => {
        let newManager = new Manager("james", 1, "fake@fakemail.com", 10);
        let officeNumber = newManager.officeNumber;
        expect(officeNumber).toEqual(10);
    });
    // Tests the method getRole
    it(("should return role in getRole()"), () => {
        let newManager = new Manager("james", 1, "fake@fakemail.com", 10);
        let role = newManager.getRole();
        expect(role).toBe("Manager");
    });
})