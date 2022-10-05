const { createProjectAction } = require('./action')

function createCommand(program) {
  program
    .command('create <project> [others]')
    .description('clone repository into a folder')
    .action((project,others) => {
      createProjectAction(project,others)
    })
}

module.exports = createCommand
