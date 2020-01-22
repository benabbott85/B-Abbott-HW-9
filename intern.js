// The Intern class `extends` from Employee, and should have these additional properties/behaviors:

// school
// getSchool()
// getRole() (Overridden to return 'Intern')
const Employee = require("./Employee");


class Intern extends Employee {
    constructor (name, id, email, school){
        super (name, id, email)
        this.school= school;
    }

    getRole(){
        return "Intern";
    }

    getSchool (){
        return this.school;
    }
}

module.exports = Intern