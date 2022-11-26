// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
	# ${data.title}

		## Table of Contents
		- [Description](#Description)
		- [Installation](#Installation)
		- [Usage](#Usage)
		- [Contribution](#Contribution)
		- [Testing](#Testing)
		- [License](#License)
		- [Questions](#Questions)

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
		${data.license}

		## Questions
		You can reach me at my GitHub Account: ${data.github}
		You can reach me at my Email Address: ${data.email}
`;
}

module.exports = generateMarkdown;
