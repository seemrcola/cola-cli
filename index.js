const { program } = require('commander')
const pkg = require('./package.json')
const commanderHelp = require('./lib/core/help')
const {
  createCommand,
  addCpnCommand,
  addRepoCommand,
  setRepoCommand,
  deleteRepoCommand,
  getRepoListCommand,
  randomCommand,
  fetchCommand,
  openCommand
} = require('./lib/core/cli')

/* get program help */
commanderHelp(program)

/* generator command */
//!todo addCpnCommand(program) 
createCommand(program)
addRepoCommand(program)
setRepoCommand(program)
getRepoListCommand(program)
deleteRepoCommand(program)
randomCommand(program)
fetchCommand(program)
openCommand(program)

/* add version */
program.version(pkg.version)

/* parse */
program.parse()
