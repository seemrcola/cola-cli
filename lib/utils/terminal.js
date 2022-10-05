// !terminal code

const { spawn } = require('child_process')
const isWin = process.platform == 'win32'

function commandSpawn(...args) {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args)
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    childProcess.on('close', () => resolve())
  })
}

module.exports = {
  commandSpawn,
  isWin
}
