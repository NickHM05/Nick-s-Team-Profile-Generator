class Employee {
    constructor(name,id,email)
    {
        this.name=name; this.id=id; this.email=email;
    }
    //de
     getName(){
        return this.name;
     }

     getId(){
        return this.id;
     }

     getEmail(){
        return this.email;
     }

     getRole(){
        return 'Employee';
     }
} 
//<li class="list-group-item">ID: ${manager.getId()}</li> 
//This will print to the cards (engineer,intern, etc.)
// need to have getRole() as well. it will get the role of the top of the card
// have functions that push all those differnet roles from data to an array
// async might be needed (it has the .filter and .map array methods to use).

module.exports = Employee;

