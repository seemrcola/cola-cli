const { promisify } = require('util')
const ora = require('ora')
const download = promisify(require('download-git-repo'))
const figlet = promisify(require('figlet'))

async function fetchUrl(url) {
  // !start
  const spinner = ora({
    text: `clone repo from ${url}`,
    color: "yellow",
  })
  const words = await figlet('clone start')
  console.log(words)

  // !clone
  spinner.start()
  await download(`direct:${url}`, 'app', { clone: true })
  spinner.succeed()
}

module.exports = fetchUrl
