const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it(("extends the Employe class with gitHub as a property"), () => {
        let newEngineer = new Engineer("james", 1, "fake@fakemail.com", "james418");
        let gitHubUsername = newEngineer.github;
        expect(gitHubUsername).toEqual("james418");
    });
    it(("should return github username in getGithub()"), () => {
        let newEngineer = new Engineer("james", 1, "fake@fakemail.com", "james418");
        let getGitHub = newEngineer.getGithub();
        expect(getGitHub).toEqual("james418");
    })
})