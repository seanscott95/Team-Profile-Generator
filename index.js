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
    inquirer
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
            const engineer = new Engineer (name, id, email, gitHub);
            cardArray.push(engineer);
        })
}

const internQuestions = () => {
    inquirer
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
            const intern = new Intern (name, id, email, school);
            cardArray.push(intern);
        })
}

const managerQuestions = () => {
    inquirer
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
            const manager = new Manager (name, id, email, officeNumber);
            cardArray.push(manager);
        })
}


// Enter the team manager’s name, employee ID, email address, and office number
// After that have a menu with the option to add an engineer or an intern or to finish building my team
// Engineer - Enter the engineer’s name, ID, email, and GitHub username then take back to the menu
// Intern - Enter the intern’s name, ID, email, and school then take back to the menu
// Finish building team - exit application and generate HTML