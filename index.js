// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: 'What is the name of this project?',
	},
	{
		type: "input",
		name: "description",
		message: 'How would you describe this project?',
	},
	{
		type: "input",
		name: "installation",
		message: 'How do you install this project?',
	},
	{
		type: "input",
		name: "usage",
		message: 'How do you use this project?',
	},
	{
		type: "input",
		name: "contribution",
		message: 'How can you contribute to this project?',
	},
	{
		type: "input",
		name: "tests",
		message: 'How did you test this project?',
	},
	{
		type: "input",
		name: "github",
		message: 'What github account can you be found at?',
	},
	{
		type: "input",
		name: "email",
		message: 'What email can you be reached at?',
	},
	{
		type: "list",
		name: "license",
		message: 'What license would you like to apply to this project?',
		choices: ['none', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT'],
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log("Hello World");
