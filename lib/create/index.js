const { promisify } = require('util')
const ora = require('ora')
const chalk = require('chalk')
const download = promisify(require('download-git-repo'))
const figlet = promisify(require('figlet'))

const { getRepos, commandSpawn } = require('./helper')
const Inquirer = require('./inquirer')

async function create(project) {
  // !choose
  const repos = await getRepos()
  if (Object.keys(repos).length == 0) 
    return console.log(chalk.red('no repos, try add <repo> <reponame>'))
  const chooseRepo = await Inquirer.choose(repos)
  const cloneRepo = repos[chooseRepo]

  // !start
  const spinner = ora({
    text: `clone repo from ${cloneRepo}`,
    color: "yellow",
  })
  const words = await figlet('clone start')
  console.log(words)

  // !clone
  // bug: status 1[fix: #main] ; status 128 [fix: unkown, maybe network]
  spinner.start()
  await download(`direct:${cloneRepo}`, project, { clone: true })
  spinner.succeed()

  // !install
  const command = await Inquirer.install()
  if (!command) return
  await commandSpawn(`${command}`, ['install'], { cwd: `./${project}` })

  // !run
  const ifServe = await Inquirer.serve()
  if (!ifServe) return
  commandSpawn(`${command}`, ['run', 'dev'], { cwd: `./${project}` })
}

module.exports = create
