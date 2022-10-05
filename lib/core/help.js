function commanderHelp(program) {
  /* add options */
  program
    .option('--itc', 'cli for itc')
    .option('-d --description', 'a cli for vue-template')

  /* help */
  program.on('--help', () => {
    console.log('')
    console.log('Help:')
    console.log("that's all")
  })
}

module.exports = commanderHelp


