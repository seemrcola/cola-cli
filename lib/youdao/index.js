const request = require('request');
const chalk = require('chalk');
const noCase = require('no-case');
const urlencode = require('urlencode');
const isChinese = require('is-chinese');
const ora = require('ora')
const getUrl = require('./config');
const Parser = require('./parser');

function youdao(word) {
  const keyword = isChinese(word) ? word : noCase(word);
  const spinner = ora({
    text: `'正在翻译中...'`,
    color: "yellow",
  })
  request(
    {
      url: getUrl(keyword) + urlencode(keyword),
    },
    (error, _, body) => {
      if (error) {
        spinner.failed('翻译出错');
        console.log(`Translate word : ${chalk.red(error)}.`);
        return false;
      }
      spinner.succeed('翻译完成');
      console.log(Parser.parse(isChinese(word), body));
    },
  );
}

module.exports = youdao;
