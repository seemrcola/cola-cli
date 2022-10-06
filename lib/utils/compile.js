const path = require('path')
const ejs = require('ejs')

function compile(tempName, data) {
  const templatePosition = `../template/${tempName}`
  const templatePath = path.resolve(__dirname, templatePosition)

  return new Promsie((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, null, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })
}

module.exports = {
  compile
}
