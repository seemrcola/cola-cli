const { program } = require('commander')
const pkg = require('./package.json')
const commanderHelp = require('./lib/core/help')
const {
  createCommand,
  addCpnCommand,
  addRepoCommand,
  setRepoCommand,
  deleteRepoCommand,
  getRepoListCommand
} = require('./lib/core/cli')

/* get program help */
commanderHelp(program)

/* generator command */
createCommand(program)
addCpnCommand(program)
addRepoCommand(program)
setRepoCommand(program)
getRepoListCommand(program)
deleteRepoCommand(program)

/* add version */
program.version(pkg.version)

/* parse */
program.parse()
