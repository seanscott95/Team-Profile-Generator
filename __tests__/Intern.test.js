// Imports the Intern constructor function
const Intern = require("../lib/Intern");

describe(("Intern"), () => {
    // Creates the intern object and tests the new property school
    it(("Extends the employee class with school as a property"), () => {
        let newIntern = new Intern("james", 1, "fake@fakemail.com", "Fakeschool High");
        let internSchool = newIntern.school;
        expect(internSchool).toEqual("Fakeschool High");
    });
    // Tests the method getSchool
    it(("Should return school from getSchool()"), () => {
        let newIntern = new Intern("james", 1, "fake@fakemail.com", "Fakeschool High");
        let getSchool = newIntern.getSchool();
        expect(getSchool).toEqual("Fakeschool High");
    });
    // // Tests the method getRole
    it(("Should return role from getRole()"), () => {
        let newIntern = new Intern("james", 1, "fake@fakemail.com", "Fakeschool High");
        let role = newIntern.getRole();
        expect(role).toEqual("Intern");
    });
})