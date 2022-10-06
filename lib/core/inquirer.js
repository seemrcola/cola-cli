const inquirer = require('inquirer')

async function choose(repos) {
  let keys = Object.keys(repos)
  let chooseArr = keys.map(i => ({ name: i, value: i }))
  const { choose } = await inquirer.prompt([
    {
      type: 'list',
      message: 'choose repo for template :',
      name: 'choose',
      prefix: '🟢',
      default: 'default',
      choices: chooseArr
    }
  ])
  return choose 
}

async function install() {
  const { packages } = await inquirer.prompt([
    {
      type: 'input',
      message: 'all done. and would you like add packages [yes or no] ? :',
      name: 'packages',
      prefix: '🟢',
    }
  ])
  if (packages !== 'yes') return void 0

  const { command } = await inquirer.prompt([
    {
      type: 'list',
      message: 'whitch one  would you prefer ? :',
      name: 'command',
      prefix: '🟢',
      default: 'pnpm',
      choices: [
        { name: 'pnpm', value: 'pnpm' },
        { name: 'yarn', value: 'yarn' },
        { name: 'npm', value: 'npm' },
      ]
    }
  ])
  return command
}

async function serve() {
  const { serve } = await inquirer.prompt([
    {
      type: 'input',
      message: 'all done. and would you like to run this project [yes or no] ? :',
      name: 'serve',
      prefix: '🟢',
    }
  ])
  if(serve !== 'yes') return void 0
  return serve 
}

module.exports = createInquirer = {
  install,
  serve,
  choose
}
