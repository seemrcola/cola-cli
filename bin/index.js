#! /usr/bin/env node
const { program } = require('commander')
const pkg = require('../package.json')

/* add description */
program
  .option('-d --description', 'a cli for vue-template')

/* help */
program.on('--help', () => {
  console.log('')
  console.log('Help:')
  console.log("that's all")
})

program
  .command('repos')
  .description('get repo list')
  .action(() => {
    require('../lib/repos')()
  })

program
  .command('addrepo <repo> <reponame>')
  .description('add repo')
  .action((repo, reponame) => {
    require('../lib/addrepo')(repo, reponame)
  })

program
  .command('setrepo <repo> <reponame>')
  .description('set repo')
  .action((repo, reponame) => {
    require('../lib/setrepo')(repo, reponame)
  })

program
  .command('delrepo <reponame>')
  .description('delete repo')
  .action((reponame) => {
    require('../lib/delrepo')(reponame)
  })

program
  .command('create <projectName>')
  .description('clone repository into a folder')
  .action((projectName) => {
    require('../lib/create')(projectName)
  })

program
  .command('fetch <github-url>')
  .description('fetch a repo')
  .action((url) => {
    require('../lib/fetch')(url)
  })

program
  .command('open <url>')
  .description('open url[website] with default broswer')
  .action((url) => {
    require('../lib/open')(url)
  })

program
  .command('reg')
  .description('regex list')
  .action(() => {
    require('../lib/regex')()
  })

program
  .command('youdao <word>')
  .description('translate by youdao')
  .action((word) => {
    require('../lib/youdao')(word)
  })

program
  .command('search <keyword>')
  .option('-n, --npm', 'search by npm')
  .option('-s, --stackoverflow', 'search by stackoverflow')
  .option('-w, --wiki', 'search by wiki')
  .option('-b, --baidu', 'search by baidu')
  .option('-g, --github', 'search by github')
  .option('-d, --default', 'search by google')
  .option('-a, --all', 'search by all sites')
  .description('quick search single or mutiple')
  .action((name, cmd) => {
    console.log(cmd)
    require('../lib/search')(name, cmd);
  });

program
  .command('url <url> <alias>')
  .option('-l, --list', 'collections')
  .option('-a, --add', 'add url')
  .option('-s, --set', 'set url')
  .option('-d, --delete', 'delete url')
  .description('enshrine url | delete url | set url | url list')
  .action((url, alias, options) => {
    console.log(options)
    require('../lib/url')(url, alias, options);
  });



/* add version */
program.version(pkg.version)

/* parse */
program.parse()
