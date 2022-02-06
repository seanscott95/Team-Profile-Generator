const Manager = require("../lib/Manager");

describe(("Manager"), () => {
    it(("extends employee with the property of office number"), () => {
        let newManager = new Manager("james", 1, "fake@fakemail.com", 10);
        let officeNumber = newManager.officeNumber;
        expect(officeNumber).toEqual(10);
    });
    it(("should return role in getRole()"), () => {
        let newManager = new Manager("james", 1, "fake@fakemail.com", 10);
        let role = newManager.getRole();
        expect(role).toBe("Manager");
    });
})