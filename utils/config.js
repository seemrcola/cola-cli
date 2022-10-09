const path = require('path')

const ITCRC = path.join(
  process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'],
  '.itcrc'
);

module.exports = { ITCRC }
