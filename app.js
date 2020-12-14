// import files, modules and packages
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employeeQuestions = require('./lib/employeeQuestions')
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// require and render html
const render = require("./lib/htmlRenderer");

// empty array to push employee data
const employeeList = []

// capitalize first letter of every word
function capCharZero(string) {
    return string.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
}

// function to create manager info
const managerInfo = () => {
    // return data given for manager
    return inquirer.prompt(employeeQuestions[0].managerQuestions).then((managerData) => {
        const newManager = new Manager(capCharZero(managerData.managerName), capCharZero(managerData.id), managerData.email, capCharZero(managerData.officeNumber))
        employeeList.push(newManager)
        askType()
    })
}

// function to create engineer info
const engineerInfo = () => {
    return inquirer.prompt(employeeQuestions[1].engineerQuestions).then((engineerData) => {
        const newEngineer = new Engineer(capCharZero(engineerData.engineersName), capCharZero(engineerData.id), engineerData.email, capCharZero(engineerData.github))
        employeeList.push(newEngineer)
        askType()
    })
}

// function to create intern info
const internInfo = () => {
    return inquirer.prompt(employeeQuestions[2].internQuestions).then((internData) => {
        const newIntern = new Intern(capCharZero(internData.internsName), capCharZero(internData.id), internData.email, capCharZero(internData.school))
        employeeList.push(newIntern)
        askType()
    })
}

// function to select next employee type
const askType = () => {
    return inquirer.prompt(employeeQuestions[3].typeQuestions).then((empType) => {
        if (empType.type === 'Engineer') {
            engineerInfo()
        }
        else if (empType.type === 'Intern') {
            internInfo()
        }
        else {
            createHtml()
        }
    })
}

// call manager function to start
managerInfo()

// function to write the html file with data given
const createHtml = () => {
    const htmlContent = render(employeeList)
    // fs mod to write html
    fs.writeFile(outputPath, htmlContent, (err) => {
        // check for error
        err ?
            // if failed console log 
            console.log('FAILED TO WRITE FILE') :
            // if success console log
            console.log(`THE FILE HAS BEEN WRITTEN to ${OUTPUT_DIR}`)
    })
}