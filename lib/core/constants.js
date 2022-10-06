const path = require('path')

const DEFAULTREPO = "https://github.com/seemrcola/cola-admin-in-js.git#main"

const ITCRC = path.join(process.env[
  (process.platform === 'win32')
    ? 'USERPROFILE'
    : 'HOME'
],
  '.itcrc');

module.exports = {
  ITCRC,
  DEFAULTREPO
}
