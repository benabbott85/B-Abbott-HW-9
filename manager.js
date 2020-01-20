// The Manager class `extends` from Employee, and should have these additional properties/behaviors:

// officeNumber
// getRole() (Overridden to return 'Manager')
class Manager {
    constructor (name, id, email, officeNumber){
        this.name = name;
        this.id= id;
        this.email= email;
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
