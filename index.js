const inqurier = require("inquirer");
const fs = require("fs");
const employee = ("./employee.js");
const engineer = ("./engineer.js");
const manager = ("./manager.js");
const intern = ("./intern.js");

 const employeeArray= [];
 let headSection= [];

 function userInput (){
     inqurier
     .prompt({
         type: "input",
         message: "What is your Team Name?",
         name: "teamName",
     }
     
     ).then(function (response){
        employeeArray.push(response.teamName);
        askType();
     })

     }

function askType (){
    inqurier
    .prompt (
        {
            type: "list",
            message: "What type of employee is being setup?",
            name: "role",
            choices: ["manager", "Engineer", "Intern"]
        }).then (function (response){
            if (response.role === "Manager"){
                managerQuestions();
            } else if ( response.role === "Engineer"){
                engineerQuestions();
            } else {
                internQuestions();
            }
        });
    
}

function managerQuestions(){
    inqurier
    .prompt ([
        {
            type: "input",
            message: "Enter Employees Name:",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Employee Email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Employee office number:",
            name: "officeNumber"
        },
        {
            type: "list",
            message: "Would you like to add another employee?",
            name: "continue",
            choices: ["yes", "no"]
        }
    ]).then(function (response){
        const manager = new manager(response.name, response.id, response.email, response.officeNumber);
        employeeArray.push(manager);
        if (response.continue === "no"){
            afterPrompts();
        } else {

            askType();
        }
    });

}

function engineerQuestions(){
    inqurier
    .prompt ([
        {
            type: "input",
            message: "Enter Employee Name:",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Employee ID:",
            name: "id"
        },

        {
            type: "input",
            message: "Enter Employee Email address",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Employees Github username:",
            name: "github"
        },
        {
            type: "list",
            message: "Would you like to add another Employee?",
            name: "continue",
            choices: ["yes", "no"]
        }
        
    ]).then (function (response){
        const engineer = new Engineer (response.name, response.id, response.email, response.github);
        employeeArray.push(engineer);
        if (response.continue === "no"){
            afterPrompts();
        } else {
            askType();
        }
    });

}

function internQuestions() {
    inqurier
    .prompt ([
        {
            type: "input",
            messasge: "Enter Employee name:",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Employee Email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Interns School:",
            name: "school"
        },
        {
            type: "list",
            message: "Would you like to add another Employee?",
            name: "continue",
            choices: ["yes", "no"]
        }
    ]).then(function (response){
        const intern = new intern(response.name, response.id, response.email, response.school);
        employeeArray.push(intern);
        if (response.continue === "no"){
            afterPrompts();
        } else {
            askType();
        }
    })
}
 