const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it(("extends the Employe class with gitHub as a property"), () => {
        let newEngineer = new Engineer("james", 1, "fake@fakemail.com", "james418");
        let gitHubUsername = newEngineer.github;
        expect(gitHubUsername).toEqual("james418");
    });
})