// Imports the Engineer constructor function
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    // Creates the engineer object and tests the new property github
    it(("extends the Employe class with gitHub as a property"), () => {
        let newEngineer = new Engineer("james", 1, "fake@fakemail.com", "james418");
        let gitHubUsername = newEngineer.github;
        expect(gitHubUsername).toEqual("james418");
    });
    // Tests the method getGithub
    it(("should return github username in getGithub()"), () => {
        let newEngineer = new Engineer("james", 1, "fake@fakemail.com", "james418");
        let getGitHub = newEngineer.getGithub();
        expect(getGitHub).toEqual("james418");
    });
    // Tests the method getRole
    it(("should return role in getRole()"), () => {
        let newEngineer = new Engineer("james", 1, "fake@fakemail.com", "james418");
        let role = newEngineer.getRole();
        expect(role).toEqual("Engineer");
    });
})