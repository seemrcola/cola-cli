const { getRepos, writeFile } = require("../../utils/file")
const { ITCRC } = require('../../utils/config')

async function delRepo(repoName) {
  const customRepos = await getRepos()
  Reflect.deleteProperty(customRepos, repoName)
  writeFile(ITCRC, customRepos)
}

module.exports = delRepo
