const { getRepos, writeFile } = require("./helper")
const { ITCRC } = require('./config')

async function delRepo(repoName) {
  const customRepos = await getRepos()
  Reflect.deleteProperty(customRepos, repoName)
  writeFile(ITCRC, customRepos)
}

module.exports = delRepo
