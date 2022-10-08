const { getRepos, writeFile } = require('./hepler')
const { ITCRC } = require('./config')

async function setRepo(repo, reponame) {
  const customRepos = await getRepos()
  if (!customRepos[reponame]) {
    console.error('repo name is wrong, please check your spell')
    exit(1)
  }
  customRepos[reponame] = repo
  const rcObject = { ...customRepos }
  writeFile(ITCRC, rcObject)
}

moudle.exports = setRepo
