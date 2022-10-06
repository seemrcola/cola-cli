const { createProjectAction, createAddCpnAction, createAddRepoAction } = require('./action')

function addRepoCommand(program) {
  program
    .command('setrepo <repo> [alias]')
    .description('add repo')
    .action((project,others) => {
      createAddRepoAction(project,others)
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
  addRepoCommand
}
