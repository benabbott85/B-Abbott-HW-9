const inquirer = require("inquirer");
const fs = require("fs");
const employee = ("./employee.js");
const Engineer = require("./engineer.js");
const Manager = require("./manager.js");
const Intern = require("./intern.js");
// console.log(Engineer)

const employeeArray = [];
let headSection = [];

function userInput() {
    // console.log("hi")
    inquirer
        .prompt({
            type: "input",
            message: "What is your Team Name?",
            name: "teamName",
        }

        ).then(function (response) {
            employeeArray.push(response.teamName);
            askType();
        })

    }

function askType() {
    inquirer
        .prompt(
            {
                type: "list",
                message: "What type of employee is being setup?",
                name: "role",
                choices: ["Manager", "Engineer", "Intern"]
            }).then(function (response) {
                if (response.role === "Manager") {
                    managerQuestions();
                } else if (response.role === "Engineer") {
                    engineerQuestions();
                } else {
                    internQuestions();
                }
            });

}

function managerQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter Employees Name:",
                name: "managerName"
            },
            {
                type: "input",
                message: "Enter Employee ID:",
                name: "managerId"
            },
            {
                type: "input",
                message: "Enter Employee Email address:",
                name: "managerEmail"
            },
            {
                type: "input",
                message: "Enter Employee office number:",
                name: "managerOfficeNumber"
            },
            {
                type: "list",
                message: "Would you like to add another employee?",
                name: "managerContinue",
                choices: ["yes", "no"]
            }
        ]).then(function (response) {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber, response.managerContinue);
            employeeArray.push(manager);
            if (response.managerContinue === "no") {
                afterPrompts();
            } else {

                askType();
            }
        });

}



function engineerQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter Employee Name:",
                name: "engineerName"
            },
            {
                type: "input",
                message: "Enter Employee ID:",
                name: "engineerId"
            },

            {
                type: "input",
                message: "Enter Employee Email address",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "Enter Employees Github username:",
                name: "engineerGithub"
            },
            {
                type: "list",
                message: "Would you like to add another Employee?",
                name: "engineerContinue",
                choices: ["yes", "no"]
            }

        ]).then( response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            employeeArray.push(engineer);
            console.log(employeeArray)
            if (response.engineerContinue === "no") {
                afterPrompts();
            } else {
                askType();
            }
        });

}

function internQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                messasge: "Enter Employee name:",
                name: "internName"
            },
            {
                type: "input",
                message: "Enter Employee ID:",
                name: "internId"
            },
            {
                type: "input",
                message: "Enter Employee Email address:",
                name: "internEmail"
            },
            {
                type: "input",
                message: "Enter Interns School:",
                name: "internSchool"
            },
            {
                type: "list",
                message: "Would you like to add another Employee?",
                name: "internContinue",
                choices: ["yes", "no"]
            }
        ]).then(function (response) {
            // console.log("hi")
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            employeeArray.push(intern);
            if (response.internContinue === "no") {
                afterPrompts();
            } else {
                askType();
            }
        })
    }
    
    function generateHTML(employeeArray) {
        headSection.push(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Page</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        </head>
        
        <body>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">${employeeArray[0]}</h1>
                </div>
            </div>
            <div class="container">
                <div class="row addCard">`);
    
        for (var i = 1; i < employeeArray.length; i++) {
            if (employeeArray[i].getRole() === "Manager") {
                headSection.push(
                    `<div class="col-md">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${employeeArray[i].name}</h5>
                            <h6 class="card-subtitle mb-2">${employeeArray[i].getRole()}</h6>
                            <p class="card-text">ID: ${employeeArray[i].id}</p>
                            <p>Email: <a href="${employeeArray[i].email}" class="card-link">${employeeArray[i].email}</a></p>
                            <p>Office number: ${employeeArray[i].officeNumber}</p>
                        </div>
                    </div>
                </div>`
                );
            } else if (employeeArray[i].getRole() === "Engineer") {
                headSection.push(
                    `<div class="col-md">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${employeeArray[i].name}</h5>
                            <h6 class="card-subtitle mb-2">${employeeArray[i].getRole()}</h6>
                            <p class="card-text">ID: ${employeeArray[i].id}</p>
                            <p>Email: <a href="${employeeArray[i].email}" class="card-link">${employeeArray[i].email}</a></p>
                            <p>Email: <a href="github.com/${employeeArray[i].github}" class="card-link">${employeeArray[i].github}</a></p>
                        </div>
                    </div>
                </div>`
                );
            } else {
                headSection.push(
                    `<div class="col-md">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${employeeArray[i].name}</h5>
                                <h6 class="card-subtitle mb-2">${employeeArray[i].getRole()}</h6>
                                <p class="card-text">ID: ${employeeArray[i].id}</p>
                                <p>Email: <a href="${employeeArray[i].email}" class="card-link">${employeeArray[i].email}</a></p>
                                <p>School: ${employeeArray[i].school}</p>
                            </div>
                        </div>
                    </div>`
                )
            }
        }
        headSection.push(
            `</div>
                    </div>
                </body>
                
                </html>`
        );
        headSection.join("\n");
        return headSection;
    }

function afterPrompts(){
    const outputHtml = generateHTML(employeeArray);

    fs.writeFile(`${employeeArray[0]}.html`, outputHtml, (error) => {
        if (error) throw error;
        console.log(`The team proile has been saved to ${employeeArray[0]}.html`)
    })
}

// console.log("Welcome to the team profile generator!")

userInput();

