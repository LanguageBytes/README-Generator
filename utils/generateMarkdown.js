// Generate Markdown based on questions answered
const generateMarkdown = data => {
  return `
  
  # ${data.projectName}

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
  ${data.collab}

  ## License 
   ${data.license}
   '[![License](https://img.shields.io/badge/License-${data.license}_1.0-lightblue.svg)]'
`;
}



module.exports = generateMarkdown;
