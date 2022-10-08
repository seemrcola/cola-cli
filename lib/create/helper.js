const fs = require('fs')
const ini = require('ini')
const { spawn } = require('child_process')
const { ITCRC } = require('./config')

async function readFile(file) {
  return new Promise(resolve => {
    if (!fs.existsSync(file)) resolve({})
    else {
      try {
        const content = ini.parse(fs.readFileSync(file, 'utf-8'));
        resolve(content);
      } catch (error) {
        exit(error);
      }
    }
  });
}

async function getRepos() {
  const customRegistries = await readFile(ITCRC);
  return {...customRegistries}
}

// !child process pipe parent process
function commandSpawn(...args) {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args)
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    childProcess.on('close', () => resolve())
  })
}

module.exports = {
  getRepos,
  commandSpawn,
}
