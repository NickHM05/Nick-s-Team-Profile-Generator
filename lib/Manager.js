const Employee = require("../lib/Employee")

//needs officeNumber 
//needs getRole()—overridden to return 'Manager'
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    //getRole()—overridden to return 'Manager'
    getRole() {
        return "Manager"
    }
    //to be continued...
    getHTML() {
        return `
        <div class = "card" style = "width:16rem;">
            <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6 class ="card-subtitle mb-2 text-muted">
        ${this.getRole()}</h6>
        <p class = "card-text">Office Number:${this.getOfficeNumber()}</p>
        <a href="mailto:${this.email}
        class="card-link">${this.email}</a>
            </div>
        </div>`
    }
}

module.exports = Manager;