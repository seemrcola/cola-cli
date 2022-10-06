const { program } = require('commander')
const commanderHelp = require('./lib/core/help')
const { createCommand, addCpnCommand, addRepoCommand } = require('./lib/core/cli')
const pkg = require('./package.json')

/* get program help */
commanderHelp(program)

/* generator command */
createCommand(program)
addCpnCommand(program)
addRepoCommand(program)

/* add version */
program.version(pkg.version)

/* parse */
program.parse()
