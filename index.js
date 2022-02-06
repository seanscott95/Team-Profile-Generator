const inquirer = require("inquirer");
const fs = require("fs");
const generateHTMLPage = require("./src/generateHTML");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const cardArray = [];

const writeToFile = (data) => {
    fs.writeFile("./dist/index.html", data, (err) => {
        err ? console.log(err) : console.log("Success! You have created a team profile named index.html")
    });
}

const engineerQuestions = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineers name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's name.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineers employee ID?",
                validate: idInput => {
                    if (isNaN(idInput)) {
                        console.log('Please enter a number.')
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineers email?",
                validate: email => {

                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineers GitHub username",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter the github username.");
                        return false;
                    }
                }
            }
        ])
        .then((engineerData) => {
            const { name, id, email, gitHub } = engineerData;
            const engineer = new Engineer(name, id, email, gitHub);
            return cardArray.push(engineer);
        })
        .then(init)
}

const internQuestions = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the interns name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the interns employee ID",
                validate: idInput => {
                    if (isNaN(idInput)) {
                        console.log('Please enter a number.')
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the interns email?",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "What is the interns school?",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school.");
                        return false;
                    }
                }
            }
        ])
        .then((internData) => {
            const { name, id, email, school } = internData;
            const intern = new Intern(name, id, email, school);
            return cardArray.push(intern);
        })
        .then(init)
}

const managerQuestions = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the managers name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the managers employee ID?",
                validate: idInput => {
                    if (isNaN(idInput)) {
                        console.log('Please enter a number.')
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the managers email?",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "office",
                message: "What is the managers office number?",
                validate: officeNumberInput => {
                    if (isNaN(officeNumberInput)) {
                        console.log('Please enter a number.')
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then((managerData) => {
            const { name, id, email, officeNumber } = managerData;
            const manager = new Manager(name, id, email, officeNumber);
            return cardArray.push(manager);
        })
}

const init = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "Do you want to add an employee or finish?",
                choices: ["Engineer", "Intern", "Finish"]
            }
        ])
        .then((data) => {
            const role = data.role;
            if (role === "Engineer") {
                return engineerQuestions();
            } else if (role === "Intern") {
                return internQuestions();
            } else if (role === "Finish") {
                return cardArray;
            }
        });
}

managerQuestions()
    .then(init)
    .then(cardArray => generateHTMLPage(cardArray))
    .then(HTMLPage => writeToFile(HTMLPage))
    .catch(err => console.log(err));