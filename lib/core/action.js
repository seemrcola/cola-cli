const { promisify } = require('util')

const download = promisify(require('download-git-repo'))
const ora = require('ora')
const figlet = promisify(require('figlet'))
const open = require('open')

const config = require('../config')
const { commandSpawn, isWin } = require('../utils/terminal')
const createInquirer = require('../inquirer/create')


/* create project */
async function createProjectAction(project, others) {
  // !start with ora & figlet
  const spinner = ora({
    text: `clone repo from ${config.repo}`,
    color: "yellow",
  })
  const words = await figlet('clone start')
  console.log(words)

  // !clone repo
  // bug: status 1[fix: #main] ; status 128 [fix: unkown, maybe network]
  spinner.start()
  await download(`direct:${config.repo}`, project, { clone: true })
  spinner.succeed()

  // !install packages
  // get command
  const command = await createInquirer.install()
  // install
  if (command) {
    if (isWin && command == 'npm')
      await commandSpawn(`${command}.cmd`, ['install'], { cwd: `./${project}` })
    else
      await commandSpawn(`${command}`, ['install'], { cwd: `./${project}` })
  }

  // !run dev
  // get ifServe
  const ifServe = await createInquirer.serve()
  if(!ifServe) return 
  commandSpawn(`${command}`, ['run', 'dev'], { cwd: `./${project}` })  //no await

  // !open broswer
  open('http://localhost:3000')
}

module.exports = {
  createProjectAction
}
