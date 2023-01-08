const Employee = require("../lib/Employee")
//Intern needs school, getSchool(), getRole()-overrridden to return 'Intern'
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id ,email)

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole(){
        return "Intern";
    }

    //to be continued..
    getHTML() {
        retrun `
        <div class="card" style`
    }
}

module.exports = Intern;