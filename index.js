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

const managerQuestions = () => {
    inquirer
        .prompt([
            {
                type: ,
                name: ,
                message: ,
            },
            {
                type: ,
                name: ,
                message: ,
            },
        ])
        .then((data) => {

        })
}

const engineerQuestions = () => {
    inquirer
        .prompt([
            {
                type: ,
                name: ,
                message: ,
            },
            {
                type: ,
                name: ,
                message: ,
            },
        ])
        .then((data) => {

        })
}

const internQuestions = () => {
    inquirer
        .prompt([
            {
                type: ,
                name: ,
                message: ,
            },
            {
                type: ,
                name: ,
                message: ,
            },
        ])
        .then((data) => {

        })
}


// Enter the team manager’s name, employee ID, email address, and office number
// After that have a menu with the option to add an engineer or an intern or to finish building my team
// Engineer - Enter the engineer’s name, ID, email, and GitHub username then take back to the menu
// Intern - Enter the intern’s name, ID, email, and school then take back to the menu
// Finish building team - exit application and generate HTML