// Generates a manager card using html and bootstrap
const generateManager = (manager) => {
    return `<article class="col-4 mt-3">
                    <div class="card">
                        <section class="card-header bg-primary">
                            <h2 class="text-white">${manager.name}</h2>
                            <h3 class="text-white"><i class="bi bi-person-workspace"></i> Manager</h3>
                        </section>

                        <section class="card-body bg-light">
                            <p class="p-2 m-1 bg-white border">ID: ${manager.id}</p>
                            <p class="p-2 m-1 bg-white border">Email: <a
                                    href="mailto:${manager.email}">${manager.email}</a></p>
                            <p class="p-2 m-1 bg-white border">Office Number: ${manager.officeNumber}</p>
                        </section>
                    </div>
                </article>`;
}

// Generates an engineer card using html and bootstrap
const generateEngineer = (engineer) => {
    return `<article class="col-4 mt-3">
                <div class="card">
                    <section class="card-header bg-primary">
                        <h2 class="text-white">${engineer.name}</h2>
                        <h3 class="text-white"><i class="bi bi-laptop"></i> Engineer</h3>
                    </section>
                    <section class="card-body bg-light">
                        <p class="p-2 m-1 bg-white border">ID: ${engineer.id}</p>
                        <p class="p-2 m-1 bg-white border">Email: <a
                                href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p class="p-2 m-1 bg-white border">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                    </section>
                </div>
            </article>`;
}

// Generates an intern card using html and bootstrap
const generateIntern = (intern) => {
    return `<article class="col-4 mt-3">
    <div class="card">
        <section class="card-header bg-primary">
            <h2 class="text-white">${intern.name}</h2>
            <h3 class="text-white"><i class="bi bi-book"></i> Intern</h3>
        </section>

        <section class="card-body bg-light">
            <p class="p-2 m-1 bg-white border">ID: ${intern.id}</p>
            <p class="p-2 m-1 bg-white border">Email: <a
                    href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="p-2 m-1 bg-white border">School: ${intern.school}</p>
        </section>
    </div>
</article>`;
}

// Generates the rest of the html page needed
const generateHTMLPage = (cards) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css">
        <title>My team</title>
    </head>
    
    <body>
        <header class="text-center text-white bg-primary p-3 mb-5 display-3">My Team</header>
    
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    <!--CARDS ADDED HERE-->
                    ${cards}
                </div>
            </div>
        </main>
    </body>
    
    </html>`;
}

// Generates the actual html page that will be created
const generateTeamPage = (data) => {
    // To push all the teams profile cards into an array to be added to the generateHTMLPage functions
    const cardArray = [];

    for (let i=0; i < data.length; i++) {
        const currentEmployee = data[i];
        const role = currentEmployee.getRole();
        // If the role is a manager it calls the generateManager function 
        if (role === "Manager") {
            const manager = generateManager(currentEmployee);
            cardArray.push(manager);
        } else if (role === "Intern") {
            const intern = generateIntern(currentEmployee);
            cardArray.push(intern);
        } else if (role === "Engineer") {
            const engineer = generateEngineer(currentEmployee);
            cardArray.push(engineer);
        }
    }
    // Creating a new string of the array elements
    const cards = cardArray.join("");

    return generateHTMLPage(cards);
}

module.exports = generateTeamPage;