const escapeFn = str => escape(str).replace(/%/g, '\\');
const list = {
  name: 'action',
  type: 'list',
  message: 'ð  Please Select a regular expression',
  choices: [
    { name: 'çº¯æ°å­', value: '^[0-9]*$', example: 20 },
    {
      name: 'çº¯æ±å­',
      value: `^[${escapeFn('\u4E00')}-${escapeFn('\u9FA5')}]{0,}$`,
      example: 'ææ¯æ±å­',
    },
    {
      name: 'çº¯è±æå­æ¯',
      value: '^[a-zA-Z]+$',
      example: 'nullcli',
    },
    {
      name: 'ä¸­æãè±æãæ°å­',
      value: `^[${escapeFn('\u4E00')}-${escapeFn('\u9FA5')}A-Za-z0-9]+$`,
      example: 'åç«¯cliV1',
    },

    {
      name: 'æ¥ææ ¼å¼(ä¾:2019-11-11)',
      value: '^\\d{4}(-)(1[0-2]|0?\\d)\\1([0-2]\\d|\\d|30|31)$',
      example: '2020-11-11',
    },
    {
      name: '6-16ä½æ°å­å­æ¯ç»å',
      value: '^[a-zA-Z0-9]{6,16}$',
      example: '123456abcABC',
    },
    {
      name: 'é®ç®±å°å(email)',
      value:
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
      example: 'edg4396@qq.com',
    },
    {
      name: 'ip-v4',
      value:
        '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$',
      example: '127.0.0.1',
    },
    {
      name: 'é®æ¿ç¼ç ',
      value:
        '^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\\d{4}$',
      example: 100101,
    },
  ],
};

module.exports = { list, }
