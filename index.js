const { program } = require('commander')
const commanderHelp = require('./lib/core/help')
const createCommand = require('./lib/core/create')
const pkg = require('./package.json')

/* get program help */
commanderHelp(program)
/* generator command */
createCommand(program)

/* add version */
program.version(pkg.version)

/* parse */
program.parse()
