// The Engineer class `extends` from Employee, and should have these additional properties/behaviors:

// github (GitHub username)
// getGithub()
// getRole() (Overridden to return 'Engineer')
class Engineer {
    constructor (name, id, email, github){
        this.name = name;
        this.id= id;
        this.email= email;
        this.github= github;
    }

    getRole (){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;