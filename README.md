### what
cli  for  vue-template

### why
- clone repo easier [finish]
- add (jsx,vue,router,store) template easier [todo]

### install
```shell
pnpm add    undefined-cli -g
npm install undefined-cli -g
yarn add    undefined-cli -g
```

### usage

```shell
itc addrepo <url> [repo alias]
```
```shell
itc create reponame
```

know more by [--help]
```shell
Options:
  -d --description             a cli for vue-template
  -V, --version                output the version number
  -h, --help                   display help for command

Commands:
  repos                        get repo list
  addrepo <repo> <reponame>    add repo
  setrepo <repo> <reponame>    set repo
  delrepo <reponame>           delete repo
  create <projectName>         clone repository into a folder
  fetch <github-url>           fetch a repo
  open <url>                   open url[website] with default broswer
  reg                          regex list
  youdao <word>                translate by youdao
  search [options] <keyword>   quick search single or mutiple
  url [options] <url> <alias>  enshrine url | delete url | set url | url list
  help [command]               display help for command

Help:
that's all
```



