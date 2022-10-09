const { getRepos } = require('../../utils/file')

async function repos() {
  const customRepos = await getRepos()

  let result = ''
  const keys = Object.keys(customRepos)
  keys.forEach(repoName => {
    result += `${repoName} : ${customRepos[repoName]} \n`
  })
  if(!result) result = 'no repos, try "add <repoUrl> <repoName>"'
  console.log(result)
}

module.exports = repos
