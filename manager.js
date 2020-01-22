// The Manager class `extends` from Employee, and should have these additional properties/behaviors:

// officeNumber
// getRole() (Overridden to return 'Manager')
const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super (name, id, email)
        this.officeNumber= officeNumber
    }

    getRole (){
        return "Manager";

    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;
