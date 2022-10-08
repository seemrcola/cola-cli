const { getRepos } = require('./hepler')

async function repos() {
  const customRepos = await getRepos()

  let result = ''
  const keys = Object.keys(customRepos)
  keys.forEach(repoName => {
    result += `${repoName} : ${customRepos[repoName]} \n`
  })

  console.log(result)
}

module.exports = repos
