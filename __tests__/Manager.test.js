const Manager = require("../lib/Manager");

describe(("Manager"), () => {
    it(("extends employee with the property of office number"), () => {
        let newManager = new Manager("james", 1, "fake@fakemail.com", 10);
        let officeNumber = newManager.officeNumber;
        expect(officeNumber).toBe(10);
    });
})