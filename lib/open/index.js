const open = require('open')
const { parse } = require('url')

function openWithDefaultBroswer(url) {
  const { protocol } = parse(url);
  const website = protocol ? url : `http://${url}`;
  open(website)
}

module.exports = openWithDefaultBroswer
