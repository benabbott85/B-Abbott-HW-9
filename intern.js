// The Intern class `extends` from Employee, and should have these additional properties/behaviors:

// school
// getSchool()
// getRole() (Overridden to return 'Intern')

class Intern {
    constructor (name, id, email, school){
        this.name= name;
        this.id = id;
        this.email= email;
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