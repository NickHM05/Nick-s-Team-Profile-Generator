const Employee = require("../lib/Employee")

//needs officeNumber 
//needs getRole()—overridden to return 'Manager'
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
//getRole()—overridden to return 'Manager'
    getRole(){
        return "Manager"
    }
//to be continued...
    getHTML(){
        return `
        <div class ="card" style=""`
    }
}

module.exports= Manager;