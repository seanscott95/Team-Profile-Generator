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
                        <p class="p-2 m-1 bg-white border">GitHub: ${engineer.github}</p>
                    </section>
                </div>
            </article>`;
}

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