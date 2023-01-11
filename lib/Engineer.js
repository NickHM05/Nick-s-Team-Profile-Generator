const Employee = require("../lib/Employee");

// Extends from Employee..
// Extendsgithub => github username 
// getGithub

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //super here is used to get properties from employee class that was extended
        super(name, id, email)

        this.github = github;
    }
    //Engineer needs github—GitHub username.  and also getGithub()
    getGithub() {
        return this.github;
    }


    // getRole()=> Overridden to return 'Engineer'
    getRole() {
        return "Engineer"
    }
    //To be continued...
    getHTML() {
        return `
        <div class = "card" style = "width:18rem;">
            <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6 class ="card-subtitle mb-2 text-muted">
        ${this.getRole()}</h6>
        <p class = "card-text">ID:${this.id}</p>
        <a href="https://www.github.com/${this.github}" 
        class = "card-link">Github</a>
        <a href="mailto:${this.email}"
        class="card-link">${this.email}</a>
            </div>
        </div>
        `
    }
}

module.exports = Engineer;