// TODO: Include packages and pages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer'); 

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You need a name');
                return false; 
              }
            }
          },
    { 
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this project?',
        validate: input => {
             if (input) {
             return true;
             } else {
                  console.log('You need a motivation');
                  return false; 
                }
              }
            },
    { 
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
                validate: input => {
                     if (input) {
                     return true;
                     } else {
                          console.log('You need a reason why');
                          return false; 
                        }
                      }  
                   },
     { 
        type: 'input',
        name: 'problem',
        message: 'What problem does your project solve?',
        validate: input => {
             if (input) {
             return true;
             } else {
                  console.log('You need a problem');
                  return false; 
                }
              } 
}
]);
};


// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, error => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log("README created")
        }
    })
}; 


// TODO: Create a function to initialize app
const init = require('/Users/Sae-L/README-Generator/utils/generateMarkdown');

questions()
.then(answers => {
    return init(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(error => {
    console.log(error)
})




















// // TODO: Create an array of questions for user input
// const questions = () => {
//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'projectName',
//         message: 'What is the name of your project?',
//       },
//       {
//         type: 'input',
//         name: 'motivation',
//         message: 'What was your motivation for this project?',
//       },
//       {
//         type: 'input',
//         name: 'why',
//         message: 'Why did you build this project?',
//       },
//       {
//         type: 'input',
//         name: 'problem',
//         message: 'What problem does your project solve?',
//       },
//       {
//         type: 'input',
//         name: 'learnt',
//         message: 'What did you learn through completing this project',
//       },
//       {
//         type: 'input',
//         name: 'steps',
//         message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
//       },    {
//         type: 'input',
//         name: 'usage',
//         message: 'Provide instructions and examples for use.',
//       },    {
//         type: 'input',
//         name: 'collaborators',
//         message: 'List your collaborators, if any, with links to their GitHub profiles.',
//       },    {
//         type: 'input',
//         name: 'features',
//         message: 'If your project has a lot of features, list them here.',
//       },
//     ]);
//   };

