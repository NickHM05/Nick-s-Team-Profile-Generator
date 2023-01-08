const Employee = require("../lib/Employee")

// Extends from Employee..
// Extendsgithub => github username 
// getGithub

class Engineer extends Employee {
    constructor(name, id, email, github){
        //super here is used to get properties from employee class that was extended
        super(name,id,email)
        
        this.github;
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
        return`
        <div class="card"`
    }
}

module.exports = Engineer;