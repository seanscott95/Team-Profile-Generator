// Node modules
const inquirer = require("inquirer");
const fs = require("fs");

// Generates HTML
const generateHTMLPage = require("./src/generateHTML");

// Team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Creates a new cardArray to be pushed to
const cardArray = [];

// Function that has uses the fs writeFile function
const writeToFile = (data) => {
    fs.writeFile("./dist/index.html", data, (err) => {
        err ? console.log(err) : console.log("Success! You have created a team profile named index.html")
    });
}

// Questions for the engineer
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
                    // Checks to se if the input is a number or not
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
                // Checks to see if the input is a valid email
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
            // Creates new constants with values from the data
            const { name, id, email, github } = engineerData;
            // Uses those values to and inputs them into a new Engineer class
            const engineer = new Engineer(name, id, email, github);
            // Adds the new Engineer to the cardArray
            return cardArray.push(engineer);
        })
        // Goes back to init acting like a menu for questions
        .then(init)
}

// Questions for the intern
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
                    // Checks to see if the input is a number or not
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
                // Checks to see if the input is a valid email
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
            // Creates new constants with values from the data
            const { name, id, email, school } = internData;
            // Uses those values to and inputs them into a new Engineer class
            const intern = new Intern(name, id, email, school);
            // Adds the new Engineer to the cardArray
            return cardArray.push(intern);
        })
        // Goes back to init acting like a menu for questions
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
                    // Checks to see if the input is a number or not
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
                // Checks to see if the input is a valid email
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
                    // Checks to see if the input is a valid number
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
            // Creates new constants with values from the data
            const { name, id, email, office } = managerData;
            // Uses those values to and inputs them into a new Engineer class
            const manager = new Manager(name, id, email, office);
            // Adds the new Engineer to the cardArray
            return cardArray.push(manager);
        })
}

// Questions for the menu
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
                // If engineer is inputted then it goes to the engineer questions
                return engineerQuestions();
                // If engineer is inputted then it goes to the engineer questions
            } else if (role === "Intern") {
                return internQuestions();
                // If finish is chosen than it returns the cardArray ending the application
            } else if (role === "Finish") {
                return cardArray;
            }
        });
}

// Starts the application with the managerQuestions then onto the init (menu)
managerQuestions()
    .then(init)
    // Adds the cards to generate the HTML page text
    .then(cardArray => generateHTMLPage(cardArray))
    // Uses the generated HTML page text to generate an index.html file
    .then(HTMLPage => writeToFile(HTMLPage))
    .catch(err => console.log(err));