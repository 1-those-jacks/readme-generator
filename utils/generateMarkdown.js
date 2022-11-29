// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (!license || license === "none"){
		return "";
	} else if (license === "Apache License 2.0"){
		return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
	} else if (license === "GNU General Public License v3.0"){
		return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
	} else if (license === "MIT"){
		return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (!license || license === "none"){
		return "";
	} else if (license === "Apache License 2.0"){
		return `[Apache](https://opensource.org/licenses/Apache-2.0)`
	} else if (license === "GNU General Public License v3.0"){
		return `[GPL v3](https://opensource.org/licenses/gpl-license)`
	} else if (license === "MIT"){
		return `[MIT](https://opensource.org/licenses/MIT)`
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if(license === "none"){
		return ""
	} else{
		return `This application is licensed through the ${renderLicenseLink(license)}`
		}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
## Table of Contents
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Contribution](#contribution)

[Testing](#testing)

[License](#license)

[Questions](#questions)

## Description
	${data.description}

## Installation
	${data.installation}

## Usage
	${data.usage}

## Contribution
	${data.contribution}

## Testing
	${data.tests}

## License
	${renderLicenseSection(data.license)}

## Questions
	You can reach me at my GitHub Account: ${data.github}
	You can reach me at my Email Address: ${data.email}`
}

module.exports = generateMarkdown;
