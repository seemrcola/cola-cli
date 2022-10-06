const { promisify } = require('util')

const ora = require('ora')
const open = require('open')
const download = promisify(require('download-git-repo'))
const figlet = promisify(require('figlet'))

const { commandSpawn, isWin } = require('../utils/terminal')
const { compile } = require('../utils/compile')
const Inquirer = require('./inquirer')
const { writeFile, getRepos } = require('../utils/helper')
const { ITCRC, DEFAULTREPO } = require('./constants')

async function createProjectAction(project, others) {
  let cloneRepo = undefined

  // !choose
  const repos = await getRepos()
  let assignRepos = {}
  if (Object.keys(repos).length > 0) {
    assignRepos = Object.assign(assignRepos, repos, { default: DEFAULTREPO })
    const chooseRepo = await Inquirer.choose(assignRepos)
    cloneRepo = assignRepos[chooseRepo]
  }
  else cloneRepo = DEFAULTREPO


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
  if (command) {
    if (isWin && command == 'npm')
      await commandSpawn(`${command}.cmd`, ['install'], { cwd: `./${project}` })
    else
      await commandSpawn(`${command}`, ['install'], { cwd: `./${project}` })
  }

  // !run
  const ifServe = await Inquirer.serve()
  if (!ifServe) return
  commandSpawn(`${command}`, ['run', 'dev'], { cwd: `./${project}` })  //no await

  // !open
  open('http://localhost:3000')
}

async function createAddCpnAction(name, others) {
  // !compile
  const result = await compile('conponent.vue.ejs', { name, })

  // todo: writeFile
}

async function createAddRepoAction(repo, alias) {
  const customRepos = await getRepos()
  const userRepo = {
    [alias]: repo
  }
  const rcObject = Object.assign({}, userRepo, customRepos)
  writeFile(ITCRC, rcObject)
}

module.exports = {
  createProjectAction,
  createAddCpnAction,
  createAddRepoAction
}
