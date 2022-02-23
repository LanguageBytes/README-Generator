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
                console.log('This is a required field');
                return false; 
              }
            }
          },
    { 
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this project?',
        default: input => {
             if (!input) {
                  return ""; 
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
                        console.log('This is a required field');
                          return false; 
                        }
                      }  
                   },
     { 
        type: 'input',
        name: 'problem',
        message: 'What problem does your project solve?',
        default: input => {
            if (!input) {
                 return ""; 
               }
             }
            },
      { 
        type: 'input',
        name: 'learnt',
        message:'What did you learn during this project?',
        default: input => {
            if (!input) {
                 return ""; 
               }
            }      
        },
        { 
          type: 'input',
          name: 'install',
          message:'What are the steps required for installation?',
          validate: input => {
              if (input) {
              return true;
              } else {
                   console.log('You need to list the steps for installation');
                   return false; 
                  }
              }             

            },
            { 
              type: 'input',
              name: 'usage',
              message:'Please provide instructions and examples for use',
              validate: input => {
                  if (input) {
                  return true;
                  } else {
                       console.log('You need to list instructions for use');
                       return false; 
                      }
                  }             


                },
                { 
                  type: 'input',
                  name: 'collab',
                  message:'Please list any collaborators on this project',
                  default: input => {
                    if (!input) {
                         return ""; 
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


