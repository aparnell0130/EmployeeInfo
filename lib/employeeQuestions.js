const employeeQuestions = [
    {
        managerQuestions: [
            {
                type: 'input',
                name: 'managerName',
                message: 'What is your managers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your managers id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your managers email?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your managers office number?'
            }
        ]
    },
    {
        engineerQuestions: [
            {
                type: 'input',
                name: 'engineersName',
                message: 'What is the engineers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineers id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineers email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineers github username?'
            }
        ]
    },
    {
        internQuestions: [
            {
                type: 'input',
                name: 'internsName',
                message: 'What is the interns name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the interns id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the interns email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does the intern currently attend?'
            }
        ]
    },
    {
        typeQuestions: {
            type: 'list',
            choices: [
                'Engineer',
                'Intern',
                'No more employees'
            ],
            name: 'type',
            message: 'Who\'s next?'

        }
    }
]

module.exports = employeeQuestions