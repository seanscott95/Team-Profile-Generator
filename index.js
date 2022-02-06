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
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineers employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineers email?",
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineers GitHub username",
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
            },
            {
                type: "input",
                name: "id",
                message: "What is the interns employee ID",
            },
            {
                type: "input",
                name: "email",
                message: "What is the interns email?",
            },
            {
                type: "input",
                name: "school",
                message: "What is the interns school?",
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
            },
            {
                type: "input",
                name: "id",
                message: "What is the managers employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the managers email?",
            },
            {
                type: "input",
                name: "office",
                message: "What is the managers office number?",
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
                return engineerQuestions;
            } else if (role === "Intern") {
                return internQuestions;
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