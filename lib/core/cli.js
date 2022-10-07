const { 
  createProjectAction, 
  createAddCpnAction, 
  createAddRepoAction, 
  createSetRepoAction,
  createDelRepoAction,
  creategetRepoListAction,
  createRandomAction,
  createFetchAction,
  createOpenAction 
} = require('./action')

function getRepoListCommand(program) {
  program
    .command('repos')
    .description('get repo list')
    .action(() => {
      creategetRepoListAction()
    })
}

function addRepoCommand(program) {
  program
    .command('addrepo <repo> <reponame>')
    .description('add repo')
    .action((repo,reponame) => {
      createAddRepoAction(repo,reponame)
    })
}

function setRepoCommand(program) {
  program
    .command('setrepo <repo> <reponame>')
    .description('set repo')
    .action((repo,reponame) => {
      createSetRepoAction(repo,reponame)
    })
}

function deleteRepoCommand(program) {
  program
    .command('delrepo <reponame>')
    .description('delete repo')
    .action((reponame) => {
      createDelRepoAction(reponame)
    })
}

function createCommand(program) {
  program
    .command('create <projectName> [others]')
    .description('clone repository into a folder')
    .action((projectName,others) => {
      createProjectAction(projectName,others)
    })
}

function addCpnCommand(program) {
  program
    .command('cpn <component> [others]')
    .description('add vue component')
    .action((component,others) => {
      createAddCpnAction(component,others)
    })
}

function randomCommand(program) {
  program
    .command('random')
    .description('print a number')
    .action(() => {
      createRandomAction()
    })
}

function fetchCommand(program) {
  program
    .command('fetch <github-url>')
    .description('fetch a repo')
    .action((url) => {
      createFetchAction(url)
    })
}

function openCommand(program) {
  program
    .command('open <url>')
    .description('open url[website] with default broswer')
    .action((url) => {
      createOpenAction(url)
    })
}

module.exports = {
  createCommand,
  addCpnCommand,
  addRepoCommand,
  setRepoCommand,
  deleteRepoCommand,
  getRepoListCommand,
  randomCommand,
  fetchCommand,
  openCommand
}
