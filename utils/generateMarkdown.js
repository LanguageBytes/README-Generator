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
`;
}

const generateLicense = data => {
  if (data.license === apache)
  {
"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
 if (data.license === boost)
 '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  else {""}
}

module.exports = generateLicense;
module.exports = generateMarkdown;
