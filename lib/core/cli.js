const { 
  createProjectAction, 
  createAddCpnAction, 
  createAddRepoAction, 
  createSetRepoAction,
  createDelRepoAction,
  creategetRepoListAction 
} = require('./action')

function getRepoListCommand(program) {
  program
    .command('repos')
    .description('get repo list')
    .action((project,others) => {
      creategetRepoListAction(project,others)
    })
}

function addRepoCommand(program) {
  program
    .command('addrepo <repo> [reponame]')
    .description('add repo')
    .action((project,others) => {
      createAddRepoAction(project,others)
    })
}

function setRepoCommand(program) {
  program
    .command('setrepo <repo> [reponame]')
    .description('set repo')
    .action((project,others) => {
      createSetRepoAction(project,others)
    })
}

function deleteRepoCommand(program) {
  program
    .command('delrepo <reponame>')
    .description('delete repo')
    .action((project,others) => {
      createDelRepoAction(project,others)
    })
}

function createCommand(program) {
  program
    .command('create <project> [others]')
    .description('clone repository into a folder')
    .action((project,others) => {
      createProjectAction(project,others)
    })
}

function addCpnCommand(program) {
  program
    .command('cpn <component> [others]')
    .description('add vue component')
    .action((project,others) => {
      createAddCpnAction(project,others)
    })
}

module.exports = {
  createCommand,
  addCpnCommand,
  addRepoCommand,
  setRepoCommand,
  deleteRepoCommand,
  getRepoListCommand
}
