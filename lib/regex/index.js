const inquirer = require('inquirer');
const { list } = require('./list');

async function regex() {
  const { action } = await inquirer.prompt([list]);
  console.log(`/${action}/`);
  return action;
}

module.exports = regex;
