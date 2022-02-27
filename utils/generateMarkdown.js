// Generate Markdown based on questions answered
const generateMarkdown = data => {
  return `
  
  # ${data.projectName}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Collaborators](#Collaborators)
  * [Contact](#Contact)
  * [License](#License)

  ## Description 
  ${data.motivation}
  ${data.why}
  ${data.problem}
  ${data.learnt}

  ## Installation 
  ${data.install}

  ## Usage 
  
  ${data.usage}
  
  ## Collaborators
  This project was created by ${data.collab} 

  ## Contact 

  Github - ${data.github} 
  Email - ${data.email} 


  ## License 
  This project is licensed under ${data.license} 

   [![License](https://img.shields.io/badge/License-${data.license}_1.0-lightblue.svg)]
`;
}



module.exports = generateMarkdown;
