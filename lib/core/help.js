function commanderHelp(program) {
  /* add description */
  program
    .option('-d --description', 'a cli for vue-template')

  /* help */
  program.on('--help', () => {
    console.log('')
    console.log('Help:')
    console.log("that's all")
  })
}

module.exports = commanderHelp


