const inquirer = require("inquirer");
const fs = require("fs");
// const employee = ("./employee.js");
const Engineer = ("./engineer.js");
const Manager = ("./manager.js");
const Intern = ("./intern.js");

const employeeArray = [];
let headSection = [];

function userInput() {
    console.log("hi")
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
                choices: ["manager", "Engineer", "Intern"]
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
        ]).then(function (response) {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber, response.continue);
            employeeArray.push(manager);
            if (response.continue === "no") {
                afterPrompts();
            } else {

                askType();
            }
        });

}

userInput();

function engineerQuestions() {
    inquirer
        .prompt([
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

        ]).then(function (response) {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            employeeArray.push(engineer);
            console.log(employeeArray)
            if (response.continue === "no") {
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
        ]).then(function (response) {
            console.log("hi")
            const intern = new Intern(response.name, response.id, response.email, response.school, response.continue);
            employeeArray.push(intern);
            if (response.continue === "no") {
                afterPrompts();
            } else {
                askType();
            }
        })
    }
    function generateHTML(employeeArray) {
        return `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>
        
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center">My Team ${employeeArray[0]}</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        {{ team }}
                    </div>
                </div>
            </div>

            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${employeeArray[i].name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{${employeeArray[i].role}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: {{ id }}</li>
                    <li class="list-group-item">Email: <a href="mailto:{{ email }}">${employeeArray[i].email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${employeeArray[i].github}" target="_blank" rel="noopener noreferrer">{{ github }}</a></li>
                </ul>
            </div>
        </div>
    
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${employeeArray[i].name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employeeArray[i].role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${employeeArray[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:{{ email }}">${employeeArray[i].email}</a></li>
            <li class="list-group-item">Office number: ${employeeArray[i].officeNumber}</li>
        </ul>
    </div>
</div>
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${employeeArray[i].name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${employeeArray[i].role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${employeeArray[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:{{ email }}">${employeeArray[i].email}</a></li>
            <li class="list-group-item">School: ${employeeArray[i].school}</li>
        </ul>
    </div>
</div>

        </body>
        
        </html>
        `
    }

function afterPrompts(){
    const outputHtml = generateHTML(employeeArray);

    fs.writeFile(`${employeeArray[0]}.html`, outputHtml, (error) => {
        if (error) throw error;
        console.log(`The team proile has been saved to ${employeeArray[0]}.html`)
    })
}

console.log("Welcome to the team profile generator!")

userInput();

