const { promisify } = require('util')

const ora = require('ora')
const open = require('open')
const download = promisify(require('download-git-repo'))
const figlet = promisify(require('figlet'))

const Inquirer = require('./inquirer')
const { commandSpawn, isWin } = require('../utils/terminal')
const { compile } = require('../utils/compile')
const { writeFile, getRepos } = require('../utils/helper')
const { ITCRC, DEFAULTREPO } = require('./constants')
const { exit } = require('process')

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

async function createAddRepoAction(repo, reponame) {
  const customRepos = await getRepos()
  const userRepo = {
    [reponame]: repo
  }
  const rcObject = Object.assign({}, userRepo, customRepos)
  writeFile(ITCRC, rcObject)
}

async function createSetRepoAction(repo, reponame) {
  const customRepos = await getRepos()
  if (!customRepos[reponame]) {
    console.error('repo name is wrong, please check your spell')
    exit(1)
  }
  customRepos[reponame] = repo
  const rcObject = Object.assign({}, customRepos)
  writeFile(ITCRC, rcObject)
}

async function creategetRepoListAction() {
  const customRepos = await getRepos()
  customRepos['default'] = DEFAULTREPO

  let result = ''
  const keys = Object.keys(customRepos)
  keys.forEach(repoName => {
    result += `${repoName} : ${customRepos[repoName]} \n`
  })

  console.log(result)
}

async function createDelRepoAction(repoName) {
  const customRepos = await getRepos()
  Reflect.deleteProperty(customRepos, repoName)
  writeFile(ITCRC, customRepos)
}

async function createFetchAction(url) {
    // !start
    const spinner = ora({
      text: `clone repo from ${url}`,
      color: "yellow",
    })
    const words = await figlet('clone start')
    console.log(words)
  
    // !clone
    spinner.start()
    await download(`direct:${url}`, 'app', { clone: true })
    spinner.succeed()
}

async function createOpenAction(url) {
  open(url)
}

async function createRandomAction(length) {
  console.log(Math.random())
}



module.exports = {
  createProjectAction,
  createAddCpnAction,
  createAddRepoAction,
  createSetRepoAction,
  createDelRepoAction,
  creategetRepoListAction,
  createFetchAction,
  createRandomAction,
  createOpenAction
}
