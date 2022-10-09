const { getRepos, writeFile } = require('../../utils/file')
const { ITCRC } = require('../../utils/config')

async function addRepo(repo, reponame) {
  if(!reponame || !repo) 
    return console.log( `<repo> or <reponame> can not be undefined`)
    
  const customRepos = await getRepos()
  const userRepo = {
    [reponame]: repo
  }
  const rcObject = { ...userRepo, ...customRepos }
  writeFile(ITCRC, rcObject)
}

module.exports = addRepo
