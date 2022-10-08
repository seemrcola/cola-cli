const fs = require('fs')
const ini = require('ini')
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
  return { ...customRegistries }
}

module.exports = { getRepos }
