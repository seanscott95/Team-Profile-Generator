const Intern = require("../lib/Intern");

describe(("Intern"), () => {
    it(("Extends the employee class with school as a property"), () => {
        let newIntern = new Intern("james", 1, "fake@fakemail.com", "Fakeschool High");
        let internSchool = newIntern.school;
        expect(internSchool).toEqual("Fakeschool High");
    });
    it(("Should return school from getSchool()"), () => {
        let newIntern = new Intern("james", 1, "fake@fakemail.com", "Fakeschool High");
        let getSchool = newIntern.getSchool();
        expect(getSchool).toEqual("Fakeschool High");
    });
    it(("Should return role from getRole()"), () => {
        let newIntern = new Intern("james", 1, "fake@fakemail.com", "Fakeschool High");
        let role = newIntern.getRole();
        expect(role).toEqual("Intern");
    });
})