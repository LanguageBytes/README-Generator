// Generate Markdown based on questions answered
const generateMarkdown = data => {
  return `# ${data.projectName}

  ## License 
  This project is license under ${data.license}

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

  ## Tests
  ${data.test}


 
`;
}


module.exports = generateMarkdown;
