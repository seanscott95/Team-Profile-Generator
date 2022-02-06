const Intern = require("../lib/Intern");

describe(("Intern"), () => {
    it(("Extends the employee class with school as a property"), () => {
        let newIntern = new Intern("james", 1, "fake@fakemail.com", "Fakeschool High");
        let internSchool = newIntern.school;
        expect(internSchool).toEqual("Fakeschool High");
    })
})