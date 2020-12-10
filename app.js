const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employeeQuestions = require('./lib/employeeQuestions')
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeList = []

// manager
const managerInfo = () => {
    // console.log(employeeQuestions[0])
    return inquirer.prompt(employeeQuestions[0].managerQuestions).then((managerData) => {
        console.log(managerData)
        const newManager = new Manager(managerData.managerName, managerData.id, managerData.email, managerData.officeNumber)
        employeeList.push(newManager)
        // console.log(employeeList)
        askType()
    })
}
const engineerInfo = () => {
    return inquirer.prompt(employeeQuestions[1].engineerQuestions).then((engineerData) => {
        console.log(engineerData)
        const newEngineer = new Engineer(engineerData.engineersName, engineerData.id, engineerData.email, engineerData.github)
        employeeList.push(newEngineer)
        // console.log(employeeList)
        askType()
    })
}

const internInfo = () => {
    return inquirer.prompt(employeeQuestions[2].internQuestions).then((internData) => {
        console.log(internData)
        const newIntern = new Intern(internData.internsName, internData.id, internData.email, internData.school)
        employeeList.push(newIntern)
        console.log(newIntern)
        askType()
    })
}
// next employee type
const askType = () => {
    console.log(employeeList)
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
managerInfo()



const createHtml = () => {
    const htmlContent = render(employeeList)
    // fs mod to write html
    fs.writeFile(__dirname + '/main.html', htmlContent, (err) => {
        // check for error
        err ?
            // if failed console log 
            console.log('FAILED TO WRITE FILE') :
            // if success console log
            console.log('THE FILE HAS BEEN WRITTEN')
    })
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
