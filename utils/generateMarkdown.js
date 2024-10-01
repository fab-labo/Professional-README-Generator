function generateMarkdown(data) {
  return `
    # Project Title:

    ## ${data.title}
    ${data.license}
    
    ## Description

    ${data.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## License

    This project is licensed under the ${data.license} license.

    ## Contributing

    ${data.contributing}

    ## Tests

    ${data.tests}

    ## Contact Information 

    * Github Username: ${data.username}
    * Contact Email: ${data.email}

    `;
}

export default generateMarkdown;